
import { addBase } from '@internal/storybook'
import { Stack } from '@raid-ui/stack'
import { Flex } from '@raid-ui/container'
import { Text } from '@raid-ui/type'
import { Spacer } from '@raid-ui/align'

import { ArrowDown } from '../ArrowDown'
import { Check } from '../Check'
import { ArrowLeftCircle } from '../ArrowLeftCircle'
import { Gift } from '../Gift'

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
    <Gift sx={{ m: 5 }} />
  </Stack>
)

export const Inline = () => {
  return (
    <Stack>
      <Flex>
        <ArrowLeftCircle size={5} />
        <Text>Not inline</Text>
      </Flex>
      <Flex row alignItems='center'>
        <ArrowLeftCircle isInline size={5} />
        <Spacer px={1} />
        <Text>isInline</Text>
      </Flex>
    </Stack>
  )
}
