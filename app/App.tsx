import React from 'react'
import { ViewStyle } from 'react-native'
import { colors } from './theme'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { AppNavigator } from './navigators'
import { useInitialRootStore } from './models'


function App(): JSX.Element {
  const { rehydrated } = useInitialRootStore(() => {
    setTimeout(() => { }, 500)
  })

  if (!rehydrated) return null

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
