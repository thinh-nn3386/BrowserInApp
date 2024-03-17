import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, BackHandler, Dimensions, Platform } from 'react-native'
import { Screen } from 'app/components'
import { colors } from 'app/theme'
import WebView, { WebViewNavigation } from 'react-native-webview'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Bar } from 'react-native-progress'
import { BrowserTabsScreenProps } from 'app/navigators/navigator.types'
import { observer } from 'mobx-react-lite'
import { useStores } from 'app/models'
import ViewShot from 'react-native-view-shot'
import RNFS from 'react-native-fs'
import { WebsiteType } from 'app/resources/type'

export const BrowserScreen: FC<BrowserTabsScreenProps<'website'>> = observer((props) => {
  const store = useStores()
  const navigation = props.navigation
  const tabs: WebsiteType = props.route.params || null

  const webViewRef = useRef(null)
  const ref = useRef<ViewShot>(null)

  const initUrl = tabs.url || tabs.dapp.website

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

  const folderPath = store.tabsImageFolderPath
  const filePath = folderPath + `/${tabs.id}.png`

  // ------------------------METHOD-----------------------------

  const takeViewShot = async () => {
    // remove old image
    const imageUri = await ref.current.capture()

    if (!(await RNFS.exists(folderPath))) {
      await RNFS.mkdir(folderPath)
    }

    // On Android copyFile will overwrite destPath if it already exists.
    // On iOS an error will be thrown if the file already exists.
    if (Platform.OS === "ios") {
      if (await RNFS.exists(filePath)) {
        await RNFS.unlink(filePath)
      }
    }

    await RNFS.copyFile(imageUri, filePath)

    store.updateBrowserTabs({
      ...tabs,
      localImage: filePath,
      lastUpdaetImage: Date.now(),
    })
  }

  const closeBrowser = () => {
    store.removeBrowserTabs(tabs.id)
    navigation.navigate('home')
  }

  const goBackView = () => {
    webViewRef.current?.goBack()
  }

  const goForwardView = () => {
    webViewRef.current?.goForward()
  }

  const changeTabs = async () => {
    await takeViewShot()
    navigation.navigate('tabs')
  }

  const reload = () => {
    webViewRef.current?.reload()
  }

  const clearCache = () => {
    webViewRef.current?.clearCache()
  }

  const goHome = () => {
    navigation.navigate('home')
  }

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current?.goBack()
      return true // prevent default behavior (exit app)
    }
    return false
  }

  const handleWebViewNavigationStateChange = useCallback((newNavState: WebViewNavigation) => {
    setCurrentWebState(newNavState)
    const { url, title } = newNavState

    if (!url) return

    store.updateBrowserTabs({
      ...tabs,
      url,
      title,
    })

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      webViewRef.current?.stopLoading()
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      webViewRef.current?.stopLoading()
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

    return () => { }
  }, [])

  // ------------------------RENDER-----------------------------

  return (
    <Screen
      useSafe
      header={
        <>
          <Header dapp={tabs.dapp} closeBrowser={closeBrowser} title={currentWebState.title} />
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
          clearCache={clearCache}
          goHome={goHome}
        />
      }
      backgroundColor={colors.background2}
      contentContainerStyle={{ flex: 1, backgroundColor: colors.background }}
    >
      <ViewShot
        ref={ref}
        options={{ quality: 0.5, fileName: tabs.id + Date.now() / 1000 }}
        style={{ flex: 1 }}
      >
        <WebView
          ref={webViewRef}
          source={{ uri: initUrl }}
          style={{
            backgroundColor: colors.background,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          mediaPlaybackRequiresUserAction={true}
          allowsInlineMediaPlayback
          sharedCookiesEnabled={true}
          allowsBackForwardNavigationGestures
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
          onLoadEnd={({ nativeEvent }) => {
            const { loading } = nativeEvent
            if (!loading) {
              takeViewShot()
            }
          }}
          setSupportMultipleWindows={false}
          renderLoading={() => <ActivityIndicator />}
        />
      </ViewShot>
    </Screen>
  )
})
