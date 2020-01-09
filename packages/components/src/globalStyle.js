
import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const GlobalStyle = createGlobalStyle`
  // html {
  //   font-size: 62.5%;
  // }
  body {
    margin: 0;
    background: ${themeGet('colors.gray.50')};
    color: ${themeGet('colors.gray.700')};
    font-family: ${themeGet('type.fallback')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
    text-rendering: optimizelegibility;
    // display: flex;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-overflow-scrolling: touch;
  }
  .main {
    display: flex;
    flex: 1;
  }
`
