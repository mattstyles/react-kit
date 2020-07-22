
import { Send, Heart, Repeat, Copy } from 'react-feather'
import { addBase } from '@internal/storybook'
import { Spacer, Center } from '@raid-ui/align'

import { Box, Spread, Flex } from './index'

export default {
  title: 'Components/Layout/Containers',
  decorators: [addBase()]
}

export const BoxStory = () => {
  return (
    <>
      <Box>Box</Box>
      <Box bg='rebeccapurple' color='white'>Box</Box>
      <Box my={4}>Box</Box>
      <Box p={2} border='light.200'>Box</Box>
      <Box
        sx={{
          py: 2,
          px: 4,
          my: 2,
          border: 'light.200',
          borderRadius: 'circular'
        }}
      >
        Box
      </Box>
      <Box
        bg='positive.700'
        color='white'
        p={2}
        __hover={{ bg: 'positive.500' }}
      >Box
      </Box>
    </>
  )
}
BoxStory.story = {
  name: 'Box'
}

export const FlexStory = () => {
  return (
    <>
      <Flex bg='background.100' p={2}>
        <Heart size={16} />
        <Copy size={16} />
      </Flex>
      <Spacer py={2} />
      <Flex row bg='background.100' p={2}>
        <Heart size={16} />
        <Copy size={16} />
      </Flex>
    </>
  )
}
FlexStory.story = {
  name: 'Flex'
}

export const SpreadStory = () => {
  return (
    <Spread>
      <Send size={24} />
      <Center row>
        <Heart size={24} />
        <Spacer px={1} />
        <span>2</span>
      </Center>
      <Repeat size={24} />
      <Copy size={24} />
    </Spread>
  )
}
SpreadStory.story = {
  name: 'Spread'
}
