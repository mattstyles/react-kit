
// import { lighten } from 'polished'
// import palx from 'palx'
// import Shevy from 'shevyjs'

import {
  scale4, fibonacci, linear10,
  uiFontScale, lineHeights, kerning, fonts,
  borders, shadows, transitions, breaks
} from './scale'

import * as Mixins from './mixins'
import * as Utils from './utils'

export { Mixins as mixins }
export { Utils as utils }

// @TODO use tailwind hand-cranked palette
// create storybook page to compare
// const baseColor = '#40fdfd'
// const pal = palx(baseColor)

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

// const brand = {
//   primary: pal.teal,
//   error: pal.red
// }
//
// const baseLineHeight = 1.6
// const baseFontSize = 1.4
//
// const shevy = new Shevy({
//   baseFontScale: 'minorThird',
//   baseLineHeight: baseLineHeight,
//   baseFontSize: `${baseFontSize}rem`,
//   proximity: true
// })

// https://github.com/system-ui/designql#specification
// https://github.com/salesforce-ux/theo#supported-categories
// https://github.com/primer/components/blob/master/src/theme.js
// https://github.com/styled-system/styled-system/blob/master/docs/table.md
// @TODO this lives inside `styled` for now, it will become the theme
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

// export const theme = {
//   baseLineHeight,
//   basePadding: 1.2,
//   borderRadius: 3,
//
//   baseIconSize: 4.4,
//   baseIconTextSize: 1.6,
//
//   layout: {
//     headerHeight: 4.4,
//     footerHeight: 4.4
//   },
//
//   transition: {
//     main: 150,
//     spin: 1250
//   },
//
//   type: {
//     ...styled.fonts,
//
//     onLightShadow: `0 1px rgba(0, 0, 0, 0.2)`,
//
//     size: {
//       vlarge: uiFontScale[4],
//       large: uiFontScale[3],
//       base: uiFontScale[2],
//       small: uiFontScale[1],
//       vsmall: uiFontScale[0]
//     },
//
//     color: {
//       main: pal.gray[9],
//       heading: lighten(0.1, pal.gray[9])
//     },
//
//     // body copy parameters
//     body: shevy.body,
//     content: shevy.content,
//     h1: shevy.h1,
//     h2: shevy.h2,
//     h3: shevy.h3,
//     h4: shevy.h4,
//     h5: shevy.h5,
//     h6: shevy.h6
//   },
//
//   palette: {
//     ...pal,
//     background: grays,
//     ...brand,
//     white: '#ffffff'
//   },
//
//   // @TODO rework colours, this is not good
//   color: {
//     primary: brand.primary[5],
//     primaryDark: brand.primary[7],
//     primaryLight: brand.primary[4],
//     header: grays[8],
//     error: brand.error[5],
//
//     button: {
//       primary: brand.primary[5],
//       primaryHover: brand.primary[6],
//       primarySelect: brand.primary[7],
//       transparent: 'transparent',
//       transparentHover: 'rgba(0, 0, 0, 0.1)',
//       transparentSelect: 'rgba(0, 0, 0, 0.4)',
//       error: brand.error[7],
//       errorHover: brand.error[8],
//       errorSelect: brand.error[9]
//     }
//   },
//
//   // @TODO remove, this is unnecessary in a default theme
//   gradient: {
//     background: `radial-gradient(
//       circle at 50% 90%,
//       rgba(0, 0, 0, 0.05) 0,
//       rgba(0, 0, 0, 0.3) 60%,
//       rgba(0, 0, 0, 0.4) 100%
//     )`,
//     backgroundSubtle: `radial-gradient(
//       circle at 50% 90%,
//       rgba(0, 0, 0, 0.01) 0,
//       rgba(0, 0, 0, 0.1) 60%,
//       rgba(0, 0, 0, 0.15) 100%
//     )`,
//     primaryRadial: `radial-gradient(
//       circle at 50% 90%,
//       ${brand.primary[5]} 0,
//       ${brand.primary[7]} 60%,
//       ${brand.primary[8]} 100%
//     )`,
//     primary: `linear-gradient(30deg, ${brand.primary[8]}, ${brand.primary[4]})`,
//     primaryShift: `linear-gradient(30deg, ${pal.teal[5]}, ${pal.green[4]})`,
//     primaryLight: `linear-gradient(30deg, ${pal.lime[3]}, ${pal.green[7]})`,
//     primaryDark: `linear-gradient(30deg, ${pal.lime[7]}, ${pal.green[8]})`,
//     dusk: `linear-gradient(30deg, ${pal.violet[5]}, ${pal.blue[6]})`,
//     sunset: `linear-gradient(30deg, ${pal.orange[3]}, ${pal.red[7]} 75%)`
//   },
//
//   // Styled-system
//   ...styled
// }
