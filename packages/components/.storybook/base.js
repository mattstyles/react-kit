
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src'

// @TODO does the default theme need decorating?
// probably does for example stories.
import { theme } from './theme'

export const Base = ({
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}
