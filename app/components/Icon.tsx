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
    ...WrapperProps
  } = props
  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  const $iconColor = [colorValue && { tintColor: colorValue }]

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
}
