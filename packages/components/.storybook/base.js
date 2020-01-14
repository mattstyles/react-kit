
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src'
import { Layout } from '../src/storybook/index'

import { theme } from './theme'

export const Base = ({
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        {children}
      </Layout>
    </ThemeProvider>
  )
}
