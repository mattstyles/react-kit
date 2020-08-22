
import {
  uiFontScale, lineHeights, kerning, fonts
} from './type'

import {
  common, gray,
  red, green, blue, yellow,
  darkAlpha, lightAlpha
} from './colours'

import { shadows } from './shadows'
import { breakpoints } from './breakpoints'

import { sizes, space } from './sizes'
import { zIndices } from './zindices'

import { borders, radii, borderWidths } from './borders'

import { transitions } from './transitions'

import { tokens } from './tokens'

// Core theme tokens
const core = {
  // type
  fonts: fonts,
  lineHeights: lineHeights,
  letterSpacings: kerning,
  fontSizes: uiFontScale,

  // skin
  colors: {
    white: common.white,
    black: common.black,
    transparent: common.transparent,
    dark: darkAlpha,
    light: lightAlpha,
    background: gray,
    text: gray,
    info: blue,
    positive: green,
    critical: red,
    warning: yellow
  },
  shadows: shadows,
  breakpoints: breakpoints,

  // layout
  space: space,
  sizes: sizes,
  zIndices: zIndices,

  // borders
  borderWidths: borderWidths,
  borders: borders,
  radii: radii,

  // variants

  // movement
  transition: transitions
}

// Higher level tokens are applied to the theme
export const theme = {
  ...core,
  tokens
}
