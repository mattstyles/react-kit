
import { addBase } from '@internal/storybook'
import { Stack } from '@raid-ui/stack'
import { Flex } from '@raid-ui/container'
import { Text, Link, P } from '@raid-ui/type'
import { Spacer } from '@raid-ui/align'
import { Button } from '@raid-ui/button'

import { ArrowDown } from '../ArrowDown'
import { Check } from '../Check'
import { ArrowLeftCircle } from '../ArrowLeftCircle'
import { Gift } from '../Gift'
import { ExternalLink } from '../ExternalLink'
import { Heart } from '../Heart'

export default {
  title: 'Components/Utility/Icon',
  decorators: [addBase()]
}

export const Basic = () => {
  return (
    <Stack>
      <ArrowDown />
      <ArrowDown color='primary' />
      <ArrowDown size={10} />
      <Check />
      <Gift sx={{ m: 5 }} />
    </Stack>
  )
}

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

export const Use = () => {
  return (
    <Stack>
      <P>This paragraph has an <Link href='#'>external link<ExternalLink sx={{ ml: 1, top: '0.05em' }} isInline size={3} /></Link> within it.</P>
      <Stack row>
        <Button>
          <Heart size={4} style={{ marginRight: 4 }} ariaHidden />Heart
        </Button>
        <Button colour='positive'>
          <Heart size={4} style={{ marginRight: 4 }} />Heart
        </Button>
      </Stack>
    </Stack>
  )
}
