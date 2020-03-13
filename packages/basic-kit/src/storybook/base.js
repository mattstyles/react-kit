
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../globalStyle'

import { theme as core } from '../theme/index'

export const Base = ({
  theme,
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle bg='gray.300' />
      {children}
    </ThemeProvider>
  )
}
Base.defaultProps = {
  theme: core
}
