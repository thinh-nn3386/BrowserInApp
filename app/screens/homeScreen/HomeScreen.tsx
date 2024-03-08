import React, { FC, useRef, useState } from 'react'
import { Screen } from 'app/components'
import { useWindowDimensions } from 'react-native'
import { TabView } from 'react-native-tab-view'
import { TabHeader } from './TabHeader'
import { UrlInput } from './UrlInput'
import { createTabsNavigationComponent } from './createTabsNavigationtContext'
import { AppStackScreenProps } from 'app/navigators/navigator.types'
import { DAppsList } from './dappList/DAppsList'
import { observer } from 'mobx-react-lite'

export const HomeScreen: FC<AppStackScreenProps<'home'>> = createTabsNavigationComponent(
  observer((props) => {
    const layout = useWindowDimensions()

    // ----------------------------PARAMS-----------------------------
    const [searchText, setSearchText] = React.useState('')
    const [isSearchinh, setIsSearching] = useState(false)

    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([{ key: 'Explore' }, { key: 'Favorites' }])

    const flatListRef1 = useRef(null)
    const flatListRef2 = useRef(null)

    const onSearch = () => {
      if (flatListRef1?.current?.scrollToLocation) {
        flatListRef1?.current?.scrollToLocation({
          viewOffset: 0,
          itemIndex: 0,
          animated: true,
        })
      }

      if (flatListRef2?.current?.scrollToOffset) {
        flatListRef2?.current?.scrollToOffset({
          offset: 0,
          animated: true,
        })
      }
      setIsSearching(true)
    }

    // ----------------------------EFFECT-----------------------------

    return (
      <Screen useSafe contentContainerStyle={{ flex: 1 }}>
        <UrlInput
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
      </Screen>
    )
  })
)
