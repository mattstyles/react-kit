
import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    background: ${themeGet('colors.gray.50')};
    color: ${themeGet('colors.gray.700')};
    font-family: ${themeGet('type.fallback')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
  }
  .main {
    display: flex;
    flex: 1;
  }
`
