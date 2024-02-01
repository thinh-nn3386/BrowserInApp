import React, { FC } from 'react'
import { Screen } from 'app/components'
import { useWindowDimensions } from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'
import { TabHeader } from './TabHeader'
import { UrlInput } from './UrlInput'
import { ExploreTab, FavoritesTab, RankTab } from './tabs/Tabs'
import { createTabsNavigationComponent } from './createTabsNavigationtContext'
import { AppStackScreenProps } from 'app/navigators/navigator.types'

const renderScene = SceneMap({
  explore: ExploreTab,
  rank: RankTab,
  favorites: FavoritesTab,
})

export const HomeScreen: FC<AppStackScreenProps<'home'>> = createTabsNavigationComponent(
  (props) => {
    const layout = useWindowDimensions()

    // ----------------------------PARAMS-----------------------------

    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([{ key: 'explore' }, { key: 'rank' }, { key: 'favorites' }])

    const onSearch = () => {
      props.navigation.navigate('search')
    }

    // ----------------------------COMPUTED-----------------------------

    return (
      <Screen useSafe contentContainerStyle={{ flex: 1 }}>
        <UrlInput onSearch={onSearch} />

        <TabHeader tabIndex={index} setTabIndex={setIndex} onSearch={onSearch} />
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={() => null}
          initialLayout={{ width: layout.width }}
        />
      </Screen>
    )
  }
)
