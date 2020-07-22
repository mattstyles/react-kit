
import { addBase } from '@internal/storybook'

import { Box } from './index'

export default {
  title: 'Components/Layout/Containers',
  decorators: [addBase()]
}

export const BoxStory = () => {
  return (
    <Box bg='rebeccapurple' color='white'>Box</Box>
  )
}
BoxStory.story = {
  name: 'Box'
}
