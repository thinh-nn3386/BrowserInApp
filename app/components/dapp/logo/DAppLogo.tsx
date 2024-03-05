import React from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'

interface Props {
  logo: string
  /**
   * Custom style
   */
  style: StyleProp<ImageStyle>
}

export const DAppLogo = ({ logo, ...props }: Props) => {
  return <Image {...props} source={{ uri: logo }} />
}
