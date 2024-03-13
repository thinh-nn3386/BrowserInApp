import * as React from 'react'
import { colors } from 'app/theme'
import { ComponentType } from 'react'
import {
  ColorValue,
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native'

export type IconTypes = keyof typeof iconRegistry

export interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes
  /**
   * An optional tint color for the icon
   */
  color?: ColorValue
  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps['onPress']
}

export const Icon = (props: IconProps) => {
  const {
    icon,
    color: colorValue = colors.text,
    size = 24,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    disabled,
    ...WrapperProps
  } = props
  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  const $iconColor = { tintColor: disabled ? colors.label : colorValue }

  return (
    <Wrapper
      accessibilityRole={isPressable ? 'imagebutton' : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[$iconColor, size && { width: size, height: size }, $imageStyleOverride]}
        source={iconRegistry[icon]}
        resizeMode="contain"
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  'x-circle-fill': require('assets/icons/x-circle-fill.png'),
  'magnifying-glass': require('assets/icons/magnifying-glass.png'),
  'arrows-clockwise-bold': require('assets/icons/arrows-clockwise-bold.png'),
  'caret-left-bold': require('assets/icons/caret-left-bold.png'),
  'caret-right-bold': require('assets/icons/caret-right-bold.png'),
  'arrows-clockwise': require('assets/icons/arrows-clockwise.png'),
  'caret-left': require('assets/icons/caret-left.png'),
  'caret-right': require('assets/icons/caret-right.png'),
  'dots-three': require('assets/icons/dots-three.png'),
  'dots-three-outline': require('assets/icons/dots-three-outline.png'),
  'dots-three-bold': require('assets/icons/dots-three-bold.png'),
  minus: require('assets/icons/minus.png'),
  wallet: require('assets/icons/wallet.png'),
  plus: require('assets/icons/plus.png'),
  'plus-bold': require('assets/icons/plus-bold.png'),
  star: require('assets/icons/star.png'),
  'star-fill': require('assets/icons/star-fill.png'),
  'minus-bold': require('assets/icons/minus-bold.png'),
  'number-square-eight': require('assets/icons/number-square-eight.png'),
  'number-square-five': require('assets/icons/number-square-five.png'),
  'number-square-four': require('assets/icons/number-square-four.png'),
  'number-square-nine': require('assets/icons/number-square-nine.png'),
  'number-square-one': require('assets/icons/number-square-one.png'),
  'number-square-seven': require('assets/icons/number-square-seven.png'),
  'number-square-six': require('assets/icons/number-square-six.png'),
  'number-square-three': require('assets/icons/number-square-three.png'),
  'number-square-two': require('assets/icons/number-square-two.png'),
  x: require('assets/icons/x.png'),
  link: require('assets/icons/link.png'),
  copy: require('assets/icons/copy.png'),
  share: require('assets/icons/share.png'),
  trash: require('assets/icons/trash.png'),
  'house-line': require('assets/icons/house-line.png'),
  'arrow-left': require('assets/icons/arrow-left.png'),
  browser: require('assets/icons/browser.png'),
  'x-bold': require('assets/icons/x-bold.png'),
  'google-chrome-logo': require('assets/icons/google-chrome-logo.png'),
}
