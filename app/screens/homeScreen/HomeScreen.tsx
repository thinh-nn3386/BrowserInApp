import React, { FC, useRef, useState } from 'react'
import { Screen } from 'app/components'
import { FlatList, SectionList, TextInput, StyleSheet, useWindowDimensions } from 'react-native'
import { TabView } from 'react-native-tab-view'
import { TabHeader } from './TabHeader'
import { UrlInput } from './UrlInput'
import { createTabsNavigationComponent } from './createTabsNavigationtContext'
import { AppStackScreenProps } from 'app/navigators/navigator.types'
import { DAppsList } from './dappList/DAppsList'
import { observer } from 'mobx-react-lite'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { colors } from 'app/theme'

export const HomeScreen: FC<AppStackScreenProps<'home'>> = createTabsNavigationComponent(
  observer((props) => {
    const layout = useWindowDimensions()

    // ----------------------------PARAMS-----------------------------
    const [searchText, setSearchText] = React.useState('')
    const [isSearchinh, setIsSearching] = useState(false)

    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([{ key: 'Explore' }, { key: 'Favorites' }])

    const flatListRef1 = useRef<SectionList>(null)
    const flatListRef2 = useRef<FlatList>(null)
    const textInputRef = useRef<TextInput>(null)

    const onSearch = () => {
      if (flatListRef1?.current?.scrollToLocation) {
        flatListRef1?.current?.scrollToLocation({
          viewOffset: 0,
          itemIndex: 0,
          sectionIndex: 0,
          animated: true,
        })
      }

      if (flatListRef2?.current?.scrollToOffset) {
        flatListRef2?.current?.scrollToOffset({
          offset: 0,
          animated: true,
        })
      }

      textInputRef.current.focus()

      setIsSearching(true)
    }

    // ----------------------------EFFECT-----------------------------

    return (
      <Screen useSafe contentContainerStyle={{ flex: 1 }}>
        <UrlInput
          ref={textInputRef}
          isSearchinh={isSearchinh}
          searchText={searchText}
          setIsSearching={setIsSearching}
          setSearchText={setSearchText}
        />


        <TabHeader routes={routes} tabIndex={index} setTabIndex={setIndex} onSearch={onSearch} />
        <TabView
          navigationState={{ index, routes }}
          renderScene={({ route }) => {
            switch (route.key) {
              case 'Explore':
                return <DAppsList ref={flatListRef1} isCategory />
              case 'Favorites':
                return <DAppsList ref={flatListRef2} isFavorite />
              default:
                return null
            }
          }}
          onIndexChange={setIndex}
          renderTabBar={() => null}
          lazy
          initialLayout={{ width: layout.width }}
        />
        {isSearchinh && (
          <Animated.View entering={FadeInDown} style={{
            ...StyleSheet.absoluteFillObject,
            top: 56,
            backgroundColor: colors.background2
          }}>
            <DAppsList searchText={searchText} />
          </Animated.View>
        )}
      </Screen>
    )
  })
)
