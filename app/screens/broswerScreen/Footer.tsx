import React from 'react'
import { Icon } from 'app/components'
import { View } from 'react-native'
import { WebViewNavigation } from 'react-native-webview'

interface Props {
  currentWebState: WebViewNavigation
  goBack: () => void
  goForward: () => void
  changeTabs: () => void
  reload: () => void
  menu: () => void
}

export const Footer = ({ currentWebState, goBack, goForward, changeTabs, reload, menu }: Props) => {
  return (
    <View
      style={{
        paddingVertical: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Icon disabled={!currentWebState.canGoBack} icon="caret-left" onPress={goBack} />
      <Icon disabled={!currentWebState.canGoForward} icon="caret-right" onPress={goForward} />
      <Icon icon="number-square-one" onPress={changeTabs} />
      <Icon icon="arrows-clockwise" onPress={reload} />
      <Icon icon="dots-three-bold" onPress={menu} />
    </View>
  )
}
