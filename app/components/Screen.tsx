import { colors } from 'app/theme'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
  Platform,
  StatusBar,
  StatusBarProps as RNStatusBarProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface ScreenProps {
  useSafe?: boolean
  /**
   * Add content container padding : 16
   */
  padding?: boolean
  /**
   * On Top header components.
   */
  header?: JSX.Element
  /**
   * On Bottom footer components.
   */
  footer?: JSX.Element
  /**
   * Add footer container padding : 16
   */
  footerPadding?: boolean
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
  /**
   * Status bar setting. Defaults to dark-content.
   */
  statusBarStyle?: 'light-content' | 'dark-content'
  /**
   * By how much should we offset the keyboard? Defaults to 0.
   */
  keyboardOffset?: number
  /**
   * Pass any additional props directly to the StatusBar component.
   */
  StatusBarProps?: RNStatusBarProps
  /**
   * Pass any additional props directly to the KeyboardAvoidingView component.
   */
  KeyboardAvoidingViewProps?: RNKeyboardAvoidingViewProps
}

const isIos = Platform.OS === 'ios'

export const Screen = observer((props: ScreenProps) => {
  const {
    useSafe,
    backgroundColor = colors.background,
    KeyboardAvoidingViewProps,
    keyboardOffset = 16,
    StatusBarProps,
    statusBarStyle = 'light-content',
    style,
    contentContainerStyle,
    children,
    padding,
  } = props
  const insets = useSafeAreaInsets()
  const $safeAreaStyle: StyleProp<ViewStyle> = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  }

  const $footerPadding: StyleProp<ViewStyle> = [props.footerPadding && { paddingHorizontal: 16 }]

  const $keyboardAvoidingViewStyleRewite: StyleProp<ViewStyle> = [
    $keyboardAvoidingViewStyle,
    KeyboardAvoidingViewProps?.style,
  ]

  const $screenStyle: StyleProp<ViewStyle> = [
    $innerStyle,
    padding && { paddingHorizontal: 16 },
    { flex: 1 },
    contentContainerStyle,
  ]

  return (
    <View style={[$containerStyle, { backgroundColor }, useSafe && $safeAreaStyle]}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={backgroundColor}
        {...StatusBarProps}
        translucent
      />

      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardOffset}
        {...KeyboardAvoidingViewProps}
        style={$keyboardAvoidingViewStyleRewite}
      >
        {!!props.header && <View>{props.header}</View>}

        <View style={[$outerStyle, style]}>
          <View style={$screenStyle}>{children}</View>
        </View>

        {!!props.footer && <View style={$footerPadding}>{props.footer}</View>}
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
