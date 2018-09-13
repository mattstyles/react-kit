
import { createGlobalStyle } from 'styled-components'
import oc from 'open-color'

import { getTheme } from './theme/utils'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    background: ${oc.gray[0]};
    color: ${getTheme('type.color.main')};
    font-family: ${getTheme('type.fallback')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
  }
  .main {
    display: flex;
    flex: 1;
  }
`
