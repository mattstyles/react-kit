
import {
  scale4, fibonacci, linear10,
  uiFontScale, lineHeights, kerning, fonts,
  borders, shadows, transitions, breaks
} from './scale'

const grays = [
  '#f9fafa',
  '#e9eced',
  '#d2d8da',
  '#96a4a9',
  '#6b7f86',
  '#203f49',
  '#1c3841',
  '#183037',
  '#13262c',
  '#0c191d'
]

// Core theme tokens
const core = {
  // type
  fonts: fonts,
  lineHeights: lineHeights,
  letterSpacing: kerning,
  fontSizes: uiFontScale,

  // skin
  colors: {
    primary: 'hsl(140, 80%, 58%)',
    background: grays,
    white: 'hsl(275, 5%, 100%)'
  },
  shadows: shadows,
  breakpoints: breaks,

  // layout
  space: scale4,
  sizes: scale4,
  zIndices: linear10,

  // borders
  borderWidths: fibonacci,
  borders: borders,
  radii: fibonacci,

  // variants

  // movement
  transition: transitions
}

// More specific aliases to core scales
// Components may define their own alias tokens as well
const aliases = {}

export const theme = {
  ...core,
  ...aliases
}
