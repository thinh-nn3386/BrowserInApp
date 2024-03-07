import { palette } from './palette'

export const colors = {
  transparent: 'transparent',

  primary: palette.blue1,
  white: palette.white,

  link: palette.blue,
  success: palette.green,
  warning: palette.orange,
  error: palette.red,

  text: palette.text1,
  label: palette.text3,

  disable: palette.text4,
  border: palette.line2,
  borderLight: palette.text2,

  background: palette.background1,
  background2: palette.background2,
  block: palette.background3,
}

/**  @see https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4 */
const transparencyForHex = {
  80: 'CC',
  75: 'BF',
  50: '80',
  40: '66',
  20: '33',
  10: '1A',
}

export const colorTransparency = (
  hexColor: string,
  transparency: keyof typeof transparencyForHex
) => {
  return hexColor + transparencyForHex[transparency]
}

