
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Box } from './box'
import { Pane, Flex, Spacer, Divider, Screen, View } from './layout'
import { theme } from '../theme'
// import { addBase } from '../storybook/index'

export default {
  title: 'Components/Layout'
  // decorators: [addBase()]
}

export const Test = () => {
  return (
    <ThemeProvider theme={theme}>
      <Screen>
        <View>
          <Box sx={{ p: 3, bg: 'blue.700' }}>
            <h1>heading</h1>
          </Box>
          <Pane split>
            <Pane>One</Pane>
            <Pane>Two</Pane>
          </Pane>
          <Flex>flex</Flex>
          <Spacer sx={{ m: 2 }} />
          <Divider />
          <Flex sx={{ flexDirection: 'row' }}>
            <span>One</span><Divider isVertical /><span>two</span>
          </Flex>
        </View>
      </Screen>
    </ThemeProvider>
  )
}
