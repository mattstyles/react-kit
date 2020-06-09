
import { extend } from '@raid/ui-core'

import { tokens } from './tokens'
import { type } from './type'

import { variants as buttonVariants } from '../controls/button.variants'
import { rounding } from './variants'

const matchedLineHeights = [
  1, 1, 1.25, 1.5, 2, 2, 2.25, 3, 3.5, 4.5, 5.625
].map(s => `${s}rem`)

/**
 * Enrich the core theme with properties and tokens related to the library.
 * Theme properties are raw css props, tokens reference those properties.
 * Tokens are attached to styled-system scales, as such they will be transformed
 * in to the theme properties.
 */
export const theme = extend()(
  {
    variants: {
      buttons: buttonVariants.buttons,
      buttonColours: buttonVariants.colours,
      buttonSizes: buttonVariants.sizes,
      rounding: rounding,
      checkboxes: {},
      inputs: {},
      selects: {},
      cards: {},
      images: {},
      badges: {}
    }
  },
  {
    // Colours
    colors: {
      primary: 'hsl(230, 60%, 58%)'
    },

    // Borders - this can be removed as it is no useful
    borders: {
      control: '2px solid hsl(214, 32%, 91%)'
    },

    // Typography,
    // @TODO add to theme primitives and delete here
    matchedLineHeights,

    /**
     * Tokens and the type scale are aliases for theme properties, they should
     * not form styled-system scales and should be transformed by styled-system.
     */
    tokens,
    type
  }
)

export const extendTheme = extend(theme)
