
import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { tokens } from './theme/index'

/**
 * Contains a barely adapted reset by Andy Bell
 * https://hankchizljaw.com/wrote/a-modern-css-reset/
 */
export const GlobalStyle = createGlobalStyle(
  props => ({
    html: {
      'text-size-adjust': '100%'
    },
    body: {
      color: themeGet('colors.gray.700')(props),

      fontFamily: themeGet('fonts.fallback')(props),
      fontSize: themeGet(`fontSizes.${tokens.type.baseSize}`)(props),
      lineHeight: themeGet(`matchedLineHeights.${tokens.type.baseSize}`)(props),
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
    'ul[class], ol[class]': {
      padding: 0,
      listStyle: 'none'
    },

    /* Remove default margin */
    'body, h1, h2, h3, h4, p, ul[class], ol[class], li, figure, figcaption, blockquote, dl, dd': {
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

    /* Natural flow and rhythm in articles by default */
    'article > * + *': {
      'margin-top': '1em'
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
  })
)
