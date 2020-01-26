
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'basic-kit-theme'

import { Base, Extended, Expo, CompSx } from './styles'

export default {
  title: 'Passing styles'
}

export const Hmmm = () => {
  return (
    <ThemeProvider theme={theme}>
      <Base sx={{ px: 8, bg: '#f0f0f0' }}>Base: Box</Base>
      <hr />
      <Base sx={{ p: 2 }}>
        <p>Extended accepts instance modifications via sx, great.</p>
        <Extended>Papayawhip</Extended>
        <Extended sx={{ bg: 'cadetblue' }}>sx, CadetBlue. works.</Extended>
        <Extended bg='crimson'>bg: Crimson: but it is not.</Extended>
        <p>Testing extra styling functions:</p>
        <Extended sx={{ maxWidth: 10 }}>maxWidth: 8</Extended>
      </Base>
      <hr />
      <Base sx={{ p: 2 }}>
        <h3>Expo</h3>
        <Expo>darkblue text</Expo>
        <Expo sx={{ bg: 'crimson' }}>Crimson</Expo>
      </Base>
      <hr />
      <Base sx={{ p: 2 }}>
        <h3>CompSx</h3>
        <CompSx>darkblue text</CompSx>
        <CompSx sx={{ bg: 'crimson' }}>Crimson</CompSx>
      </Base>
    </ThemeProvider>
  )
}
