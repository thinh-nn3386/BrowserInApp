
import { observer } from 'mobx-react-lite'
import { useStores } from 'app/models'
import { BrowserNavigatorParamsList } from 'app/navigators/navigator.types'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BrowserTabsScreen } from 'app/screens/broswer/tabs/BrowserTabsScreen'
import { BrowserScreen } from 'app/screens/broswer/screen/BrowserScreen'

const Tab = createBottomTabNavigator<BrowserNavigatorParamsList>()

export const BrowserTabsNavigator = observer(() => {
  const store = useStores()

  const browserTabs = store.browserTabs.toJSON()

  return (
    <Tab.Navigator
      tabBar={() => null}
      screenOptions={{
        lazy: true,
        headerShown: false,
      }}
      backBehavior="none"
    >
      <Tab.Screen name="tabs" component={BrowserTabsScreen} />
      {browserTabs.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={'website' + tab.id}
          component={BrowserScreen}
          initialParams={{ url: 'google.com' }}
        />
      ))}
    </Tab.Navigator>
  )
})
