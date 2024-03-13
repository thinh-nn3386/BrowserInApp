import React, { forwardRef, useEffect, useState } from 'react'
import {
  SectionList,
  StyleProp,
  View,
  ViewStyle
} from 'react-native'
import { DAppItem } from 'app/components/DAppItem'
import { FlatList } from 'react-native-gesture-handler'
import { observer } from 'mobx-react-lite'
import { useStores } from 'app/models'
import { Text } from 'app/components/Text'
import { DAppType } from 'app/resources/type'
import { useHelper } from 'app/hooks/useHelper'
import { useTabsAnimatedHeader } from '../createTabsNavigationtContext'
import { useTabNavigation } from '../useTabNavigation'
import { capitalizeFirstLetter, isValidUrl, sorteDAppByCategories } from './utils'
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'
import { FavoriteEmpty } from './FavoriteEmpty'
import { ExternalSearch } from './ExternalSearch'

interface Props {
  /**
   * Filter list by search pattern
   */
  searchText?: string
  /**
   * Specify whether the list displays as a normal list or displays sorted by category
   */
  isCategory?: boolean
  /**
   * Favevorite list
   */
  isFavorite?: boolean
  /**
   * Custom style for list app screen
   */
  contentContainerStyle?: StyleProp<ViewStyle>
}


export const DAppsList = observer(
  forwardRef(({ searchText, isCategory, contentContainerStyle, isFavorite }: Props, ref: any) => {
    const store = useStores()
    const { getUuid } = useHelper()

    const { flatListRef, ...scrollAnimatedConfig } = useTabsAnimatedHeader(ref)
    const { openAppOrBrowser, openApp, openUrl } = useTabNavigation()

    const dappDatas = !isFavorite ? store.dapps.toJSON() : store.favoriteDApps.toJSON()
    // ----------------------------PARAMS-----------------------------

    const [data, setData] = useState<DAppType[]>(dappDatas)

    // ----------------------------COMPUTED-----------------------------

    const isSearcByUrl = isValidUrl(searchText)
    const isSearchByGoogle = data?.length === 0

    // ----------------------------EFFECT-----------------------------

    useEffect(() => {
      const timeout = setTimeout(() => {
        const search = searchText?.trim().toLowerCase()
        if (search?.length >= 2) {
          setData(
            dappDatas.filter(
              (e) =>
                e.name.toLowerCase().includes(search) || e.website.toLowerCase().includes(search)
            )
          )
        } else {
          setData(dappDatas)
        }
      }, 500)

      return () => {
        clearTimeout(timeout)
      }
    }, [searchText])

    if (isCategory) {
      const sortedByCategoriesData = sorteDAppByCategories(data)
      return (
        <SectionList
          ref={ref}
          contentContainerStyle={[
            {
              paddingHorizontal: 16,
            },
            contentContainerStyle,
          ]}
          removeClippedSubviews={true}
          stickySectionHeadersEnabled={false}
          sections={sortedByCategoriesData}
          keyExtractor={(item, index) => item.name + index}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          getItemLayout={sectionListGetItemLayout({
            getItemHeight: () => 72,
            getSectionHeaderHeight: () => 48,
          })}
          renderItem={({ item }) => (
            <DAppItem
              dapp={item}
              openApp={() => {
                openApp(item)
              }}
              openUrl={() => {
                openAppOrBrowser(item)
              }}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 8,
                marginTop: 16,
                height: 48,
              }}
            >
              <Text text={capitalizeFirstLetter(title)} size={18} />
            </View>
          )}
          {...scrollAnimatedConfig}
        />
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <ExternalSearch
          searchText={searchText}
          isSearcByUrl={isSearcByUrl}
          isSearchByGoogle={isSearchByGoogle}
        />
        {!searchText && data?.length == 0 && <FavoriteEmpty />}
        <FlatList
          ref={ref}
          data={data}
          removeClippedSubviews={true}
          getItemLayout={(data, index) => ({ length: 72, offset: 72 * index, index })}
          keyExtractor={(item, index) => item.name + index}
          contentContainerStyle={[
            {
              paddingHorizontal: 16,
            },
            contentContainerStyle,
          ]}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          renderItem={({ item }) => (
            <DAppItem
              isShowFlag
              dapp={item}
              openApp={() => {
                openApp && openApp(item)
              }}
              openUrl={() => {
                openAppOrBrowser(item)
              }}
            />
          )}
          {...scrollAnimatedConfig}
        />
      </View>
    )
  })
)
