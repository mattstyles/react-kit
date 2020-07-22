
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Reset } from '@raid-ui/reset'

import core from '@raid/theme'

export const Base = ({
  theme,
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      {children}
    </ThemeProvider>
  )
}
Base.defaultProps = {
  theme: core
}
