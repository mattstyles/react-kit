
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'basic-kit-theme'

import { Box } from './box'
import { Container } from './container'

export default {
  title: 'Example API'
}

export const Hmmm = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ px: 8, bg: '#f0f0f0' }}>Base: Box</Box>
      <hr />
      <Container>
        <p><code>sx</code> exists as the master styling prop:</p>
        <Container sx={{ bg: 'crimson', color: 'white' }}>Crimson</Container>
        <p><code>sx</code> decs override styling:</p>
        <Container sx={{ px: 8, bg: 'cornsilk' }}>px: 8</Container>
      </Container>
    </ThemeProvider>
  )
}
