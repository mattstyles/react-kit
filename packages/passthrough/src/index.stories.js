
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'basic-kit-theme'

import { Base, Extended } from './index'

export default {
  title: 'Test Library API'
}

export const Hmmm = () => {
  return (
    <ThemeProvider theme={theme}>
      <Base sx={{ px: 8, bg: '#f0f0f0' }}>Base: Box</Base>
      <hr />
      <Base sx={{ p: 2 }}>
        <p>Extended accepts instance modifications, but they are lower specificity.</p>
        <Extended>Papayawhip</Extended>
        <Extended sx={{ bg: 'cadetblue' }}>CadetBlue: but it is not.</Extended>
        <Extended bg='crimson'>Crimson: but it is not.</Extended>
      </Base>
      <hr />
    </ThemeProvider>
  )
}
