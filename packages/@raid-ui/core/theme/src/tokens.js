
import { typeTokens } from './type'

export const tokens = {
  type: {
    // ref: fontSizes
    baseSize: [3, 2],

    body: {
      // ref: colors
      main: 'text.700',
      inverse: 'text.100',
      muted: 'text.500'
    },
    heading: {
      // ref: colors
      main: 'text.800',
      inverse: 'text.75',
      muted: 'text.600'
    },

    ...typeTokens
  },

  layout: {
    // ref: space/size
    padding: 4,

    // ref: radii
    rounding: 3
  },

  page: {
    background: 'background.50'
  }
}
