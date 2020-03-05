
import core from 'basic-kit-theme'
import merge from 'lodash.merge'

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
      primary: core.colors.blue[500]
    },

    // Borders
    borders: {
      control: `2px solid ${core.colors.gray[300]}`
    },

    // Typography,
    matchedLineHeights,

    /**
     * Tokens and the type scale are aliases for theme properties, they should
     * not form styled-system scales and should be transformed by styled-system.
     */
    tokens,
    type: {
      h1: {
        fontSize: '2.5rem',
        lineHeight: '2.875rem',
        mt: '2rem',
        mb: '1.5rem',
        letterSpacing: 'narrow',
        fontWeight: 300,
        color: tokens.type.heading.dark
      },
      h2: {
        fontSize: '2rem',
        lineHeight: '2.625rem',
        mt: '2rem',
        mb: '1.5rem',
        letterSpacing: 'narrow',
        fontWeight: 300,
        color: tokens.type.heading.dark
      },
      h3: {
        fontSize: '1.75rem',
        lineHeight: '2.25rem',
        mt: '2rem',
        mb: '1.5rem',
        fontWeight: 300,
        color: tokens.type.heading.dark
      },
      h4: {
        fontSize: '1.375rem',
        lineHeight: '2rem',
        mt: '2rem',
        mb: '1.5rem',
        fontWeight: 500,
        color: tokens.type.heading.dark
      },
      h5: {
        fontSize: '1.25rem',
        lineHeight: '2rem',
        mt: '2rem',
        mb: '1.5rem',
        fontWeight: 500,
        color: tokens.type.heading.dark
      },
      h6: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        mt: '2rem',
        mb: '1.5rem',
        fontWeight: 500,
        color: tokens.type.heading.dark
      },
      p: {
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        mt: '1.25rem',
        mb: '1.25rem',
        fontWeight: 400,
        color: tokens.type.body.dark
      }
    }
  }
)
