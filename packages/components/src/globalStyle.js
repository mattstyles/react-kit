
import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    background: ${themeGet('palette.background.0')};
    color: ${themeGet('type.color.main')};
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
