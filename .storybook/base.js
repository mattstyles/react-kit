
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { theme, GlobalStyle, mixins, utils, CheckBox } from '../src'
import { Controls } from './controls'

const { getTheme } = utils

const maxDemoSize = 440

export const Background = styled('div')`
  ${mixins.fit};
  position: fixed;
  z-index: -1;

  @media (min-width: ${maxDemoSize}px) {
    background: ${getTheme('gradient.sunset')};
  }
`

export const App = styled('div')`
  display: flex;
  flex: 1;
  max-width: ${maxDemoSize}px;

  @media (min-width: ${maxDemoSize}px) {
    position: absolute;
    background: ${getTheme('palette.white')};
    width: 375px;
    height: 667px;
    border: 8px solid rgba(0, 0, 0, 0.85);
    border-radius: 8px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export const Base = ({ children }) => {
  const [isApp, setIsApp] = useState(true)

  const controls = [
    {
      Component: CheckBox,
      passProps: {
        key: 'isApp',
        value: isApp,
        onChange: value => setIsApp(value)
      }
    }
  ]

  if (isApp) {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Controls config={controls} />
          <App>
            <Background />
            <GlobalStyle />
            {children}
          </App>
        </>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <Controls config={controls} />
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}
