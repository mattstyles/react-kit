
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Reset } from '@raid-ui/reset'

import { theme as core } from '@raid-ui/theme'
// import core from '@raid-ui/theme/theme.json'

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
