
import { addBase } from '@internal/storybook'
import { Flex } from '@raid-ui/layout'

import { Button } from './index'

export default {
  title: 'Components/Control/Button',
  decorators: [addBase()]
}

export const Basic = () => (
  <Flex row>
    <Button variant='solid'>Solid</Button>
    <Button variant='transparent'>Transparent</Button>
    <Button variant='outline'>Outline</Button>
    <Button variant='link'>Link</Button>
    <Button variant='naked'>Naked</Button>
    <Button variant='primary'>Primary</Button>
  </Flex>
)
