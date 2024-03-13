import React, { useState } from 'react'
import { Icon } from 'app/components'
import { View } from 'react-native'
import { WebViewNavigation } from 'react-native-webview'
import { observer } from 'mobx-react-lite'
import { useStores } from 'app/models'
import { Menu } from './Menu'
import { colors } from 'app/theme'

interface Props {
  currentWebState: WebViewNavigation
  goBack: () => void
  goForward: () => void
  changeTabs: () => void
  reload: () => void
  clearCache: () => void
  goHome: () => void
}

export const Footer = observer(
  ({ currentWebState, goBack, goForward, changeTabs, reload, clearCache, goHome }: Props) => {
    const store = useStores()

    const numberOfTabs = store.browserTabs?.length

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
      <View>
        <View
          style={{
            paddingVertical: 12,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Icon
            color={!currentWebState.canGoBack ? colors.label : colors.text}
            disabled={!currentWebState.canGoBack}
            icon="caret-left"
            onPress={goBack}
          />
          <Icon
            color={!currentWebState.canGoForward ? colors.label : colors.text}
            disabled={!currentWebState.canGoForward}
            icon="caret-right"
            onPress={goForward}
          />
          <Icon icon={tabIcon[numberOfTabs]} onPress={changeTabs} />
          <Icon icon="arrows-clockwise" onPress={reload} />
          <Icon
            icon="dots-three-bold"
            onPress={() => {
              setIsOpenMenu(true)
            }}
          />
        </View>
        <Menu
          isOpen={isOpenMenu}
          onClose={() => {
            setIsOpenMenu(false)
          }}
          url={currentWebState.url}
          clearCache={clearCache}
          goHome={goHome}
        />
      </View>
    )
  }
)

const tabIcon = {
  1: 'number-square-one',
  2: 'number-square-two',
  3: 'number-square-three',
  4: 'number-square-four',
  5: 'number-square-five',
  6: 'number-square-six',
  7: 'number-square-seven',
  8: 'number-square-eight',
  9: 'number-square-nine',
}
