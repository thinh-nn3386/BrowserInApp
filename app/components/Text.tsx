import { colors } from 'app/theme'
import React from 'react'
import {
  ColorValue,
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Presets = 'default' | 'bold' | 'label'

export interface TextProps extends RNTextProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Text size modifier.
   */
  size?: number
  /**
   * Text color modifier.
   */
  color?: ColorValue
  /**
   * Children components.
   */
  children?: React.ReactNode
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * option touchable for text component
   */
  onPress?: () => void
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  const {
    size = 16,
    text,
    children,
    style: $styleOverride,
    color: colorValue,
    onPress,
    ...rest
  } = props

  const preset: Presets = $presetStyles[props.preset] ? props.preset : 'default'

  const $styles: StyleProp<TextStyle> = [
    $presetStyles[preset],
    $fontWeightStyles[preset],
    colorValue && {
      color: colorValue,
    },
    {
      fontSize: size,
      lineHeight: size * 1.5,
    },
    $styleOverride,
  ]

  const content = text || children

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <RNText {...rest} style={$styles}>
          {content}
        </RNText>
      </TouchableOpacity>
    )
  }

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $fontWeightStyles: Record<Presets, StyleProp<TextStyle>> = {
  default: { fontWeight: '500' },
  label: { fontWeight: '500' },
  bold: { fontWeight: '700' },
}

const $baseStyle: StyleProp<TextStyle> = [$fontWeightStyles.default]

const $presetStyles: Record<Presets, StyleProp<TextStyle>> = {
  default: [$baseStyle, { color: colors.text }],

  bold: [$baseStyle, $fontWeightStyles.bold, { color: colors.text }],

  label: [$baseStyle, { color: colors.label }],
}
