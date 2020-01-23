
import core from 'basic-kit-theme'
import merge from 'lodash.merge'

import * as Mixins from './mixins'
import * as Utils from './utils'

export { Mixins as mixins }
export { Utils as utils }

// Should tokens live on the theme?
// Keep them separate so that they are used by variants and as defaults.
// They are alias tokens so they can be imported here rather than on the theme,
// when used to customise a component instance they’ll substitute in the theme
// scale tokens.
// @TODO Need a way to generate these from the theme though, they won't
// change as the theme changes -> moot, they don't directly reference the theme,
// just parts of it.
export const tokens = {
  type: {
    // baseSize: theme.fontSizes[2]

    // ref: fontSizes
    baseSize: 2,

    body: {
      // ref: colors
      light: 'gray.100',
      dark: 'gray.700'
    },
    heading: {
      // ref: colors
      light: 'gray.75',
      dark: 'gray.800'
    }
  },

  layout: {
    // ref space/size
    padding: 4,

    // ref: radii
    rounding: 3
  }
}

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
  core,
  {
    // Colours
    colors: {
      primary: core.colors.blue[500]
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
