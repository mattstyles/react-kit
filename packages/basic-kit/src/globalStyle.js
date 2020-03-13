
import { createGlobalStyle } from 'styled-components'
import { css } from '@styled-system/css'
import { sx } from '@raid/ui-core'

import { tokens } from './theme/index'

/**
 * Contains a barely adapted reset by Andy Bell
 * https://hankchizljaw.com/wrote/a-modern-css-reset/
 */
export const GlobalStyle = createGlobalStyle(
  css({
    html: {
      'text-size-adjust': '100%'
    },
    body: {
      color: tokens.type.body.dark,

      fontFamily: 'fallback',

      // These use media queried values, but they take precedence due to the order in which they appear in the CSS, check out ListItem (there are more examples though)
      fontSize: tokens.type.baseSize,
      lineHeight: tokens.type.baseSize,

      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',

      // 'text-rendering': 'optimizelegibility', // removed, can cause speed issues

      '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
      '-webkit-overflow-scrolling': 'touch',

      // From reset
      minHeight: '100vh',
      scrollBehavior: 'smooth',
      textRendering: 'optimizeSpeed'
    },

    /* Box sizing rules */
    '*, *::before, *::after': {
      boxSizing: 'border-box'
    },

    /* Remove default padding */
    /* Remove list styles on ul, ol elements with a class attribute */
    'ul, ol': {
      padding: 0
    },

    /* Remove default margin */
    'body, h1, h2, h3, h4, p, ul, ol, li, figure, figcaption, blockquote, dl, dd': {
      margin: 0
    },

    /* A elements that don't have a class get default styles */
    'a:not([class])': {
      'text-decoration-skip-ink': 'auto'
    },

    /* Make images easier to work with */
    img: {
      maxWidth: '100%',
      display: 'block'
    },

    /* Inherit fonts for inputs and buttons */
    'input, button, textarea, select': {
      font: 'inherit'
    },

    /* Remove all animations and transitions for people that prefer not to see them */
    '@media (prefers-reduced-motion: reduce)': {
      '*': {
        animationDuration: '0.01ms !important',
        animationIterationCount: '1 !important',
        transitionDuration: '0.01ms !important',
        scrollBehavior: 'auto !important'
      }
    }
  }),
  // @TODO this does not seem to work, how to make it work?
  sx
)
