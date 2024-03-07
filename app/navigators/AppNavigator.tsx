/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { AppStackParamList } from './navigator.types'
import * as Screen from 'app/screens'
// import { NoInternetConnection } from 'app/components/utils/no-internet/NoInternet'

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> { }

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  return (
    <NavigationContainer theme={DarkTheme} {...props}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={Screen.HomeScreen} />
        <Stack.Screen name="browser" component={Screen.BrowserScreen} />
        <Stack.Screen name="browserTab" component={Screen.BrowserTabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
})
