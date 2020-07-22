
import { addBase } from '@internal/storybook'

import { Box } from './index'

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
