
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'basic-kit-theme'

import { Base, Extended } from './styled'

export default {
  title: 'Styled Func'
}

export const Hmmm = () => {
  return (
    <ThemeProvider theme={theme}>
      <Base sx={{ px: 8, bg: '#f0f0f0', color: '#404040' }}>Base: Box</Base>
      <hr />
      <Base sx={{ p: 2 }}>
        <p>Extended accepts instance modifications, but they are lower specificity.</p>
        <Extended>purple</Extended>
        <Extended sx={{ bg: 'cadetblue' }}>CadetBlue: it is, thanks to sx.</Extended>
        <Extended bg='crimson'>Crimson: but it is not.</Extended>
        <p>Testing extra styling functions:</p>
        <Extended sx={{ maxWidth: 10 }}>maxWidth: 8</Extended>
      </Base>
      <hr />
    </ThemeProvider>
  )
}
