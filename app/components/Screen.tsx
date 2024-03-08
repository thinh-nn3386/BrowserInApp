import { colors } from 'app/theme'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { KeyboardAvoidingView, Platform, StatusBar, StyleProp, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ScreenProps {
  useSafe?: boolean
  /**
   * On Top header components.
   */
  header?: JSX.Element
  /**
   * On Bottom footer components.
   */
  footer?: JSX.Element
  /**
   * Children components.
   */
  children?: React.ReactNode
  /**
   * Style for the outer content container useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Style for the inner content container useful for padding & margin.
   */
  contentContainerStyle?: StyleProp<ViewStyle>
  /**
   * Background color
   */
  backgroundColor?: string
}

const isIos = Platform.OS === 'ios'

export const Screen = observer((props: ScreenProps) => {
  const {
    useSafe,
    backgroundColor = colors.background2,
    style,
    contentContainerStyle,
    children,
  } = props
  const insets = useSafeAreaInsets()

  const $safeAreaStyle: StyleProp<ViewStyle> = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  }

  const $screenStyle: StyleProp<ViewStyle> = [$innerStyle, { flex: 1 }, contentContainerStyle]

  return (
    <View style={[$containerStyle, { backgroundColor }, useSafe && $safeAreaStyle]}>
      <StatusBar barStyle={'light-content'} backgroundColor={backgroundColor} translucent />

      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : 'height'}
        keyboardVerticalOffset={16}
        style={$keyboardAvoidingViewStyle}
      >
        {!!props.header && <View>{props.header}</View>}

        <View style={[$outerStyle, style]}>
          <View style={$screenStyle}>{children}</View>
        </View>

        {!!props.footer && <View>{props.footer}</View>}
      </KeyboardAvoidingView>
    </View>
  )
})

const $containerStyle: ViewStyle = {
  flex: 1,
  height: '100%',
  width: '100%',
}

const $keyboardAvoidingViewStyle: ViewStyle = {
  flex: 1,
}

const $outerStyle: ViewStyle = {
  flex: 1,
  height: '100%',
  width: '100%',
}

const $innerStyle: ViewStyle = {
  justifyContent: 'flex-start',
  alignItems: 'stretch',
}
