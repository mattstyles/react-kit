
import { createGlobalStyle } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const GlobalStyle = createGlobalStyle`
  html {
    // Fix for some mobile inflation of text
    text-size-adjust: 100%;
  }
  body {
    margin: 0;
    // background: ${themeGet('colors.gray.50')};
    color: ${themeGet('colors.gray.700')};

    font-family: ${themeGet('fonts.fallback')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // Enables kerning and ligatures
    text-rendering: optimizelegibility;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-overflow-scrolling: touch;
  }
  .main {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
`
