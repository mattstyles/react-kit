
import { addBase } from '@internal/storybook'
import { Box } from '@raid-ui/container'
import { Spacer } from '@raid-ui/align'
import { Activity } from '@raid-ui/icons/Activity'
import { LifeBuoy } from '@raid-ui/icons/LifeBuoy'
import { Music } from '@raid-ui/icons/Music'

import { Stack } from './index'

export default {
  title: 'Components/Layout/Stack',
  decorators: [addBase()]
}

export const Basic = () => {
  return (
    <>
      <Stack sx={{ bg: 'background.100' }}>
        <LifeBuoy size={7} />
        <Music size={7} />
        <Activity size={7} color='positive.700' />
      </Stack>
      <Spacer py={1} />
      <Stack sx={{ bg: 'background.100' }} space={7}>
        <LifeBuoy size={7} />
        <Music size={7} />
        <Activity size={7} color='positive.700' />
      </Stack>
    </>
  )
}

export const Variants = () => {
  return (
    <Box color='white'>
      <Stack>
        <Box bg='positive.500'>Standard</Box>
        <Box bg='positive.600'>Standard</Box>
        <Box bg='positive.700'>Standard</Box>
      </Stack>
      <Spacer py={2} />
      <Stack tight>
        <Box bg='info.500'>Tight</Box>
        <Box bg='info.600'>Tight</Box>
        <Box bg='info.700'>Tight</Box>
      </Stack>
      <Spacer py={2} />
      <Stack row>
        <Box bg='critical.500'>Row</Box>
        <Box bg='critical.600'>Row</Box>
        <Box bg='critical.700'>Row</Box>
      </Stack>
      <Spacer py={2} />
      <Stack row tight>
        <Box bg='critical.500'>Row</Box>
        <Box bg='critical.600'>Row</Box>
        <Box bg='critical.700'>Row</Box>
      </Stack>
      <Spacer py={2} />
      <Stack row collapse={2}>
        <Box bg='warning.500'>Collapse 2</Box>
        <Box bg='warning.600'>Collapse 2</Box>
        <Box bg='warning.700'>Collapse 2</Box>
      </Stack>
    </Box>
  )
}
