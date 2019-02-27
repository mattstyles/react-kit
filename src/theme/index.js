
import oc from 'open-color'
import Shevy from 'shevyjs'
import { pick } from 'lodash'

import * as Mixins from './mixins'
import * as Utils from './utils'

export { Mixins as mixins }
export { Utils as utils }

const baseLineHeight = 1.6
const baseFontSize = 1.4

const shevy = new Shevy({
  baseFontScale: 'minorThird',
  baseLineHeight: baseLineHeight,
  baseFontSize: `${baseFontSize}rem`,
  proximity: true
})

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
    fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    main: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    monospace: `Source Code Pro, Consolas, monospace`,

    onLightShadow: `0 1px rgba(0, 0, 0, 0.2)`,

    size: {
      base: baseFontSize,
      small: 1.2,
      vsmall: 1.1
    },

    color: {
      main: oc.gray[8],
      heading: oc.gray[7]
    },

    ...pick(shevy, [
      'body',
      'content',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ])
  },

  color: {
    primary: oc.blue[5],
    primaryDark: oc.blue[7],
    primaryLight: oc.blue[4],
    header: oc.gray[8],
    error: oc.red[8],

    button: {
      primary: oc.blue[5],
      primaryHover: oc.blue[7],
      primarySelect: oc.blue[8],
      transparent: 'transparent',
      transparentHover: 'rgba(0, 0, 0, 0.1)',
      transparentSelect: 'rgba(0, 0, 0, 0.4)',
      error: oc.red[7],
      errorHover: oc.red[8],
      errorSelect: oc.red[9]
    }
  },

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
      ${oc.blue[5]} 0,
      ${oc.blue[7]} 60%,
      ${oc.blue[8]} 100%
    )`,
    primary: `linear-gradient(30deg, ${oc.blue[8]}, ${oc.blue[4]})`,
    primaryShift: `linear-gradient(30deg, ${oc.cyan[5]}, ${oc.blue[4]})`,
    primaryLight: `linear-gradient(30deg, ${oc.indigo[3]}, ${oc.blue[7]})`,
    primaryDark: `linear-gradient(30deg, ${oc.violet[7]}, ${oc.blue[8]})`,
    blue: `linear-gradient(30deg, ${oc.violet[5]}, ${oc.blue[6]})`,
    sunset: `linear-gradient(30deg, ${oc.orange[3]}, ${oc.red[7]} 75%)`
  },

  // Styled-system
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  colors: {
    primary: oc.blue[5]
  },
  fonts: {
    fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    main: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`,
    monospace: `Source Code Pro, Consolas, monospace`
  }
}
