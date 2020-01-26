
import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { tokens } from './theme/index'

export const GlobalStyle = createGlobalStyle(
  props => ({
    html: {
      'text-size-adjust': '100%'
    },
    body: {
      margin: 0,
      color: themeGet('colors.gray.700')(props),

      fontFamily: themeGet('fonts.fallback')(props),
      fontSize: themeGet(`fontSizes.${tokens.type.baseSize}`)(props),
      lineHeight: themeGet(`matchedLineHeights.${tokens.type.baseSize}`)(props),
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',

      'text-rendering': 'optimizelegibility',

      '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
      '-webkit-overflow-scrolling': 'touch'
    }
  })
)
