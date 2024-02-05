import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, BackHandler, Dimensions, Platform } from 'react-native'
import { Screen } from 'app/components'
import { colors } from 'app/theme'
import WebView, { WebViewNavigation } from 'react-native-webview'
import { Header } from './Heder'
import { Footer } from './Footer'
import { Bar } from 'react-native-progress'
import { AppStackScreenProps } from 'app/navigators/navigator.types'

export const BrowserScreen: FC<AppStackScreenProps<'browser'>> = (props) => {
  const navigation = props.navigation
  const webViewRef = useRef(null)

  // ------------------------PARAMS-----------------------------

  const [currentWebState, setCurrentWebState] = useState<WebViewNavigation>({
    url: '',
    loading: false,
    title: '',
    canGoBack: false,
    canGoForward: false,
    navigationType: 'click',
    lockIdentifier: 0,
  })
  const [loadingProgress, setLoaddingProgress] = useState(0)

  // ------------------------COMPUTED-----------------------------
  // ------------------------METHOD-----------------------------
  const closeBrowser = () => {}

  const cacheBrowser = () => {
    navigation.navigate('browserTab')
  }

  const goBackView = () => {
    webViewRef.current?.goBack()
  }

  const goForwardView = () => {
    webViewRef.current?.goForward()
  }

  const changeTabs = () => {}

  const reload = () => {
    webViewRef.current?.reload()
  }

  const menu = () => {}

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current?.goBack()
      return true // prevent default behavior (exit app)
    }
    return false
  }

  const handleWebViewNavigationStateChange = useCallback((newNavState: WebViewNavigation) => {
    setCurrentWebState(newNavState)
    const { url } = newNavState
    if (!url) return

    // handle certain doctypes
    if (url.includes('.pdf')) {
      webViewRef.current?.stopLoading()
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      webViewRef.current?.stopLoading()
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      webViewRef.current?.stopLoading()
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/'
      const redirectTo = 'window.location = "' + newURL + '"'
      webViewRef.current?.injectJavaScript(redirectTo)
    }
  }, [])

  // ------------------------EFFECTS-----------------------------

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress)
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress)
      }
    }

    return () => {}
  }, [])

  // ------------------------RENDER-----------------------------

  return (
    <Screen
      useSafe
      header={
        <>
          <Header
            closeBrowser={closeBrowser}
            cacheBrowser={cacheBrowser}
            title={currentWebState.title}
          />
          {currentWebState.loading && (
            <Bar
              progress={loadingProgress}
              width={Dimensions.get('screen').width}
              borderRadius={0}
              height={2}
              color={colors.label}
              borderColor={colors.background2}
              style={{ position: 'absolute', bottom: 0 }}
            />
          )}
        </>
      }
      footer={
        <Footer
          currentWebState={currentWebState}
          goBack={goBackView}
          goForward={goForwardView}
          changeTabs={changeTabs}
          reload={reload}
          menu={menu}
        />
      }
      backgroundColor={colors.background2}
      contentContainerStyle={{ flex: 1, backgroundColor: colors.background }}
    >
      <WebView
        allowsBackForwardNavigationGestures
        ref={webViewRef}
        source={{ uri: 'https://infinite.red' }}
        style={{ backgroundColor: colors.background }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        onRenderProcessGone={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent
          console.warn('WebView Crashed: ', nativeEvent.didCrash)
        }}
        onError={(syntheticEvent) => {
          //Function that is invoked when the WebView load fails.
          const { nativeEvent } = syntheticEvent
          console.warn('WebView error: ', nativeEvent)
        }}
        onLoadProgress={({ nativeEvent }) => {
          setLoaddingProgress(nativeEvent.progress)
        }}
        renderLoading={() => <ActivityIndicator />}
      />
    </Screen>
  )
}
