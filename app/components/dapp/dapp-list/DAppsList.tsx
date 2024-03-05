import React, { useEffect, useRef, useState } from 'react'
import {
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SectionList,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { DAppCategories, DAppType } from 'app/common/types/dapp'
import { Icon, Text } from 'app/components/cores'
import { useTheme } from 'app/services/context/Theme'
import { DAppItem } from './DAppItem'
import { FlatList } from 'react-native-gesture-handler'
import { SharedValue, clamp, useSharedValue } from 'react-native-reanimated'
import { observer } from 'mobx-react-lite'
import { useStores } from 'app/models'
import { useMixins } from 'app/services/mixins'
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout'

interface Props {
  /**
   * Filter list by search pattern
   */
  searchText?: string
  /**
   * Specify whether the list displays as a normal list or displays sorted by category
   */
  showHeader?: boolean
  scrollEnabled?: boolean
  /**
   * Filter list by category
   */
  category?: DAppCategories

  openAllApps?: (category: DAppCategories) => void
  openApp?: (app: DAppType) => void
  openUrl?: (params: { url?: string; dapp?: DAppType }) => void

  translationY?: SharedValue<number>

  /**
   * Custom style for list app screen
   */
  contentContainerStyle?: StyleProp<ViewStyle>
}

export const DAppsList = observer(
  ({
    searchText,
    showHeader,
    scrollEnabled,
    category,
    openAllApps,
    openApp,
    openUrl,
    contentContainerStyle,
    translationY = useSharedValue(0),
  }: Props) => {
    const { colors, translate } = useTheme()
    const { dappStore } = useStores()
    const { notify } = useMixins()

    // ----------------------------PARAMS-----------------------------

    const [data, setData] = useState<DAppType[]>(dappStore.dapps)
    const { scrollRef, onScroll, onScrollEndDrag } = useScrollAnimatedSearchBar(translationY)
    // ----------------------------COMPUTED-----------------------------

    const dapps = category ? data.filter((e) => e.categories.includes(category)) : data

    const isSearcByUrl = isValidUrl(searchText)

    const isSearchByGoogle = dapps.length === 0

    // ----------------------------METHODs-----------------------------

    const fetchDApps = () => {
      // if (dappStore.isNeedUpdateDapps) {
      const dappsList = dappStore.fetchDApps()
      setData(dappsList)
      // }
    }

    const openAppOrBrowser = (item: DAppType) => {
      if (dappStore.isDisableWarning(item)) {
        if (dappStore.isDisableOpenMoreTabs) {
          notify('error', translate('dapp.browser.limitedBrowserTabs'))
        } else {
          // create new tab
          dappStore.addBrowserTabs(item.website)
          openUrl &&
            openUrl({
              dapp: item,
            })
        }
      } else {
        openApp && openApp(item)
      }
    }

    // ----------------------------EFFECT-----------------------------

    useEffect(() => {
      fetchDApps()
    }, [])

    useEffect(() => {
      const timeout = setTimeout(() => {
        const search = searchText?.trim().toLowerCase()
        if (search?.length >= 2) {
          setData(
            dappStore.dapps.filter(
              (e) =>
                e.name.toLowerCase().includes(search) || e.website.toLowerCase().includes(search)
            )
          )
        } else {
          setData(dappStore.dapps)
        }
      }, 500)

      return () => {
        clearTimeout(timeout)
      }
    }, [searchText, dappStore.dapps])

    if (showHeader) {
      const sortedByCategoriesData = sorteDAppByCategories(data)
      return (
        <SectionList
          ref={scrollRef}
          contentContainerStyle={[
            {
              paddingHorizontal: 16,
            },
            contentContainerStyle,
          ]}
          onScroll={onScroll}
          onScrollEndDrag={onScrollEndDrag}
          alwaysBounceVertical={false}
          removeClippedSubviews={true}
          scrollEnabled={scrollEnabled}
          sections={sortedByCategoriesData}
          scrollEventThrottle={16}
          keyExtractor={(item, index) => item.name + index}
          getItemLayout={sectionListGetItemLayout({
            getItemHeight: () => 72,
            getSectionHeaderHeight: () => 48,
          })}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          renderItem={({ item }) => (
            <DAppItem
              dapp={item}
              openApp={() => {
                openApp && openApp(item)
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
                paddingTop: 16,
                height: 48,
              }}
            >
              <Text text={capitalizeFirstLetter(title)} size="lg" />
              {/* <TouchableOpacity
                onPress={() => {
                  openAllApps && openAllApps(title as DAppCategories)
                }}
              >
                <Text tx="dapp.all" color={colors.primary} />
              </TouchableOpacity> */}
            </View>
          )}
        />
      )
    }

    return (
      <View style={{ flex: 1 }}>
        {isSearcByUrl && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
              paddingTop: 16,
              paddingHorizontal: 16,
            }}
            onPress={() => {
              Linking.canOpenURL(searchText).then((result) => {
                if (result) {
                  openUrl && openUrl({ url: searchText })
                } else {
                  openUrl &&
                    openUrl({
                      url: 'https://www.google.com/search?q=' + searchText.replace('https://', ''),
                    })
                }
              })
            }}
          >
            <Icon icon={'browser'} color={colors.label} />
            <Text
              preset="label"
              text={translate('dapp.searchUrl') + searchText}
              style={{ marginHorizontal: 8, flex: 1 }}
            />

            <Icon icon={'caret-right'} color={colors.label} />
          </TouchableOpacity>
        )}
        {!isSearcByUrl && isSearchByGoogle && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
              paddingHorizontal: 16,
              paddingTop: 16,
            }}
            onPress={() => {
              openUrl && openUrl({ url: 'https://www.google.com/search?q=' + searchText })
            }}
          >
            <Icon icon={'google-chrome-logo'} color={colors.label} />
            <Text
              preset="label"
              tx="dapp.searchGoogle"
              txOptions={{ search: searchText }}
              style={{ marginHorizontal: 8, flex: 1 }}
            />
            <Icon icon={'caret-right'} color={colors.label} />
          </TouchableOpacity>
        )}
        <FlatList
          ref={scrollRef}
          data={dapps}
          removeClippedSubviews={true}
          onScroll={onScroll}
          onScrollEndDrag={onScrollEndDrag}
          alwaysBounceVertical={false}
          scrollEventThrottle={16}
          scrollEnabled={scrollEnabled}
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
              dapp={item}
              openApp={() => {
                openApp && openApp(item)
              }}
              openUrl={() => {
                openAppOrBrowser(item)
              }}
            />
          )}
        />
      </View>
    )
  }
)

export const sorteDAppByCategories = (data: DAppType[]) => {
  const result: Record<string, DAppType[]> = {}
  data.forEach((e) => {
    e.categories?.forEach((category) => {
      if (category in result) {
        result[category].push(e)
      } else {
        result[category] = [e]
      }
    })
  })

  return Object.keys(result).map((category) => ({
    title: category,
    data: result[category],
  }))
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const isValidUrl = (urlString: string) => {
  let url

  try {
    url = new URL(urlString)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}

// support for animated search bar on show list dapps screen
export const useScrollAnimatedSearchBar = (translationY: SharedValue<number>) => {
  const scrollRef = useRef(null)
  const prevY = useSharedValue(0)
  const scrollDirection = useSharedValue<'down' | 'up'>('up')

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y
    scrollDirection.value = offsetY - prevY.value > 0 ? 'down' : 'up'
    prevY.value = offsetY
    translationY.value = clamp(offsetY, 0, 56)
  }

  const onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y > 56) return

    // flatlsit
    if (scrollRef?.current?.scrollToOffset) {
      scrollRef?.current?.scrollToOffset({
        offset: scrollDirection.value === 'down' ? 56 : 0,
        animated: true,
      })
    }

    // scroll view
    if (scrollRef?.current?.scrollToLocation) {
      scrollRef?.current?.scrollToLocation({
        itemIndex: 0,
        viewOffset: scrollDirection.value === 'down' ? 56 : 0,
        animated: true,
      })
    }
  }

  return {
    scrollRef,
    onScroll,
    onScrollEndDrag,
  }
}
