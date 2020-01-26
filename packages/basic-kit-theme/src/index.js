
import {
  fibonacci, linear10,
  borders, shadows, transitions, breaks,
  space, sizes
} from './scale'

import {
  uiFontScale, lineHeights, kerning, fonts
} from './type'

import {
  common, gray,
  red, green, blue, yellow
} from './colours'

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
    gray,
    red,
    green,
    blue,
    yellow
  },
  shadows: shadows,
  breakpoints: breaks,

  // layout
  space: space,
  sizes: sizes,
  zIndices: linear10,

  // borders
  borderWidths: fibonacci,
  borders: borders,
  radii: fibonacci,

  // variants

  // movement
  transition: transitions
}

// Higher level tokens
// Component variants and defaults should use tokens more often than the base
// scales, however, these tokens refer to the scales. Scales are used for
// component customisations.
// These should probably be added by a library as that is where components live
// and only components need alias tokens.
const tokens = {}

export const theme = {
  ...core,
  ...tokens
}
