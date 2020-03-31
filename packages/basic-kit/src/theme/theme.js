
import core from '@raid/theme'
import merge from 'lodash.merge'
import { themeGet } from '@styled-system/theme-get'

import { tokens } from './tokens'
import { variants as buttonVariants } from '../controls/button.variants'

const matchedLineHeights = [
  1, 1, 1.25, 1.5, 2, 2, 2.25, 3, 3.5, 4.5, 5.625
].map(s => `${s}rem`)

/**
 * Enrich the core theme with properties and tokens related to the library.
 * Theme properties are raw css props, tokens reference those properties.
 * Tokens are attached to styled-system scales, as such they will be transformed
 * in to the theme properties.
 */
export const theme = merge(
  {},
  core,
  {
    variants: {
      buttons: buttonVariants.buttons,
      rounding: buttonVariants.rounding,
      buttonColours: buttonVariants.colours,
      buttonSizes: buttonVariants.sizes
    }
  },
  {
    // Colours
    colors: {
      primary: core.colors.info[500]
    },

    // Borders
    borders: {
      control: `2px solid ${core.colors.background[300]}`
    },

    // Typography,
    // @TODO add to theme primitives and delete here
    matchedLineHeights,

    /**
     * Tokens and the type scale are aliases for theme properties, they should
     * not form styled-system scales and should be transformed by styled-system.
     */
    tokens,
    type: {
      h1: props => ({
        fontSize: '2.5rem',
        lineHeight: '2.875rem',
        mt: '2rem',
        mb: '1.5rem',
        letterSpacing: 'narrow',
        fontWeight: 300,
        color: themeGet('tokens.type.heading.main')(props)
      }),
      h2: props => ({
        fontSize: '2rem',
        lineHeight: '2.625rem',
        mt: '2rem',
        mb: '1.5rem',
        letterSpacing: 'narrow',
        fontWeight: 300,
        color: themeGet('tokens.type.heading.main')(props)
      }),
      h3: props => ({
        fontSize: '1.75rem',
        lineHeight: '2.25rem',
        mt: '2rem',
        mb: '1.5rem',
        fontWeight: 300,
        color: themeGet('tokens.type.heading.main')(props)
      }),
      h4: props => ({
        fontSize: '1.375rem',
        lineHeight: '2rem',
        mt: '2rem',
        mb: '1.5rem',
        fontWeight: 500,
        color: themeGet('tokens.type.heading.main')(props)
      }),
      h5: props => ({
        fontSize: '1.25rem',
        lineHeight: '2rem',
        mt: '2rem',
        mb: '1.5rem',
        fontWeight: 500,
        color: themeGet('tokens.type.heading.main')(props)
      }),
      h6: props => ({
        fontSize: '1rem',
        lineHeight: '1.5rem',
        mt: '2rem',
        mb: '1.5rem',
        fontWeight: 500,
        color: themeGet('tokens.type.heading.main')(props)
      }),
      p: props => ({
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        mt: '1.25rem',
        mb: '1.25rem',
        fontWeight: 400,
        color: themeGet('tokens.type.body.main')(props)
      })
    }
  }
)
