
import React from 'react'

import { Box } from './box'
import { Pane, Flex, Spacer, Divider, Screen, View } from './layout'
import { addBase, Surround } from '../storybook/index'

export default {
  title: 'Components/Layout',
  decorators: [addBase()]
}

export const Test = () => {
  return (
    <Screen>
      <View>
        <Box sx={{ p: 3, bg: 'blue.700' }}>
          <h1>heading</h1>
        </Box>
        <Surround>test surround</Surround>
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
  )
}
