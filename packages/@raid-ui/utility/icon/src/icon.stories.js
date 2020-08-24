
import { addBase } from '@internal/storybook'
import { Stack } from '@raid-ui/stack'

import { ArrowDown } from '../ArrowDown'
import { Check } from '../Check'

export default {
  title: 'Components/Utility/Icon',
  decorators: [addBase()]
}

export const Basic = () => (
  <Stack>
    <ArrowDown />
    <ArrowDown color='primary' />
    <ArrowDown size={10} />
    <Check />
  </Stack>
)
