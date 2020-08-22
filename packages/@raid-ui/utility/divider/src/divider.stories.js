
import { addBase } from '@internal/storybook'
import { Flex } from '@raid-ui/container'
import { Spacer } from '@raid-ui/align'

import { Divider } from './index'

export default {
  title: 'Components/Utility/Divider',
  decorators: [addBase()]
}

export const DividerStory = () => (
  <>
    <p>Some text</p>
    <Divider />
    <p>More text</p>
    <Spacer py={4} />
    <Flex row>
      <span>A</span>
      <Divider isVertical />
      <span>B</span>
    </Flex>
    <Spacer py={4} />
    <p>Colour is dictated by the border properties</p>
    <Divider borderColor='critical.700' />
  </>
)
DividerStory.story = {
  name: 'Divider'
}
