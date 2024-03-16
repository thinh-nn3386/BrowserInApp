import React, { FC, useCallback, useRef, useState } from 'react'
import { Screen } from 'app/components'
import { FlatList, SectionList, TextInput, StyleSheet, useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'
import { TabHeader } from './TabHeader'
import { UrlInput } from './UrlInput'
import { createTabsNavigationComponent, useTabsNavigationContext } from './createTabsNavigationtContext'
import { AppStackScreenProps } from 'app/navigators/navigator.types'
import { DAppsList } from './dappList/DAppsList'
import { observer } from 'mobx-react-lite'
import Animated, { FadeInDown, withSpring } from 'react-native-reanimated'
import { colors } from 'app/theme'
import { useStores } from 'app/models'


const Explore = () => (
  <DAppsList isCategory />
);

const Favorites = () => (
  <DAppsList
    isFavorite
    contentContainerStyle={{ paddingTop: 16 }}
  />
);

const renderScene = SceneMap({
  Explore: Explore,
  Favorites: Favorites,
});

export const HomeScreen: FC<AppStackScreenProps<'home'>> = createTabsNavigationComponent(
  observer((props) => {
    const layout = useWindowDimensions()
    const { translationY } = useTabsNavigationContext()
    const store = useStores()

    // ----------------------------PARAMS-----------------------------
    const [searchText, setSearchText] = React.useState('')
    const [isSearching, setIsSearching] = useState(false)

    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([{ key: 'Explore' }, { key: 'Favorites' }])

    const textInputRef = useRef<TextInput>(null)

    const onSearch = () => {
      textInputRef.current.focus()
      translationY.value = withSpring(0, {
        mass: 1,
        stiffness: 100,
        damping: 200,
      })
      setIsSearching(true)
    }

    const isShowTabsIcon = store.browserTabs.length > 0

    // ----------------------------EFFECT-----------------------------

    return (
      <Screen useSafe contentContainerStyle={{ flex: 1 }}>
        <UrlInput
          ref={textInputRef}
          isSearching={isSearching}
          searchText={searchText}
          setIsSearching={setIsSearching}
          setSearchText={setSearchText}
        />
        <TabHeader
          isSearching={isSearching}
          isShowTabsIcon={isShowTabsIcon}
          routes={routes}
          tabIndex={index}
          setTabIndex={setIndex}
          onSearch={onSearch}
        />
        <TabView
          navigationState={{ index, routes }}
          swipeEnabled={false}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={() => null}
          initialLayout={{ width: layout.width }}
        />
        {isSearching && (
          <Animated.View
            entering={FadeInDown}
            style={{
              ...StyleSheet.absoluteFillObject,
              top: 56,
              backgroundColor: colors.background2,
            }}
          >
            <DAppsList searchText={searchText} disableAnimated />
          </Animated.View>
        )}
      </Screen>
    )
  })
)
