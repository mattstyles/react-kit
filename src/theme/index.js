
// @TODO remove along with gradients
import oc from 'open-color'

import { lighten } from 'polished'
import palx from 'palx'
import Shevy from 'shevyjs'
import { pick } from 'lodash/fp'

import * as Mixins from './mixins'
import * as Utils from './utils'

export { Mixins as mixins }
export { Utils as utils }

const baseColor = '#406cf4'
const pal = palx(baseColor)

const grays = [
  '#f9f9f9',
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

const brand = {
  primary: pal.green,
  error: pal.red
}

const baseLineHeight = 1.6
const baseFontSize = 1.4

const shevy = new Shevy({
  baseFontScale: 'minorThird',
  baseLineHeight: baseLineHeight,
  baseFontSize: `${baseFontSize}rem`,
  proximity: true
})

const scale4 = [
  0, 4, 8, 16, 32, 64, 128, 256
]

const styled = {
  space: scale4,
  colors: {
    primary: pal.green[5]
  },
  fonts: {
    fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    main: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    monospace: `Source Code Pro, Consolas, monospace`
  },
  borders: scale4,
  radii: scale4
}

export const theme = {
  baseLineHeight,
  basePadding: 1.2,
  borderRadius: 3,

  baseIconSize: 4.4,
  baseIconTextSize: 1.6,

  layout: {
    headerHeight: 4.4,
    footerHeight: 4.4
  },

  transition: {
    main: 150,
    spin: 1250
  },

  type: {
    ...styled.fonts,

    onLightShadow: `0 1px rgba(0, 0, 0, 0.2)`,

    size: {
      base: baseFontSize,
      small: 1.2,
      vsmall: 1.1
    },

    color: {
      main: pal.gray[9],
      heading: lighten(0.1, pal.gray[9])
    },

    // body copy parameters
    ...pick([
      'body',
      'content',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ], shevy)
  },

  palette: {
    ...pal,
    background: grays,
    ...brand
  },

  // @TODO rework colours, this is not good
  color: {
    primary: brand.primary[5],
    primaryDark: brand.primary[7],
    primaryLight: brand.primary[4],
    header: grays[8],
    error: brand.error[5],

    button: {
      primary: brand.primary[5],
      primaryHover: brand.primary[7],
      primarySelect: brand.primary[8],
      transparent: 'transparent',
      transparentHover: 'rgba(0, 0, 0, 0.1)',
      transparentSelect: 'rgba(0, 0, 0, 0.4)',
      error: brand.error[7],
      errorHover: brand.error[8],
      errorSelect: brand.error[9]
    }
  },

  // @TODO remove, this is unnecessary in a default theme
  gradient: {
    background: `radial-gradient(
      circle at 50% 90%,
      rgba(0, 0, 0, 0.05) 0,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0.4) 100%
    )`,
    backgroundSubtle: `radial-gradient(
      circle at 50% 90%,
      rgba(0, 0, 0, 0.01) 0,
      rgba(0, 0, 0, 0.1) 60%,
      rgba(0, 0, 0, 0.15) 100%
    )`,
    primaryRadial: `radial-gradient(
      circle at 50% 90%,
      ${brand.primary[5]} 0,
      ${brand.primary[7]} 60%,
      ${brand.primary[8]} 100%
    )`,
    primary: `linear-gradient(30deg, ${brand.primary[8]}, ${brand.primary[4]})`,
    primaryShift: `linear-gradient(30deg, ${oc.cyan[5]}, ${oc.blue[4]})`,
    primaryLight: `linear-gradient(30deg, ${oc.indigo[3]}, ${oc.blue[7]})`,
    primaryDark: `linear-gradient(30deg, ${oc.violet[7]}, ${oc.blue[8]})`,
    blue: `linear-gradient(30deg, ${oc.violet[5]}, ${oc.blue[6]})`,
    sunset: `linear-gradient(30deg, ${oc.orange[3]}, ${oc.red[7]} 75%)`
  },

  // Styled-system
  ...styled
}
