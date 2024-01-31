/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { ViewStyle } from 'react-native'
import { colors } from './theme'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppNavigator } from './navigators/AppNavigator'

function App(): JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={$container}>
        <AppNavigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

export default App
