
import { LifeBuoy, Music } from 'react-feather'
import { addBase } from '@internal/storybook'
import { Box } from '@raid-ui/container'
import { Spacer } from '@raid-ui/align'
import { Activity } from '@raid-ui/icons/Activity.js'

import { Stack } from './index'

export default {
  title: 'Components/Layout/Stack',
  decorators: [addBase()]
}

export const Basic = () => {
  return (
    <Stack sx={{ bg: 'background.100', mb: 3 }}>
      <LifeBuoy size={32} />
      <Music size={32} />
      <Activity size={7} color='positive.700' />
    </Stack>
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
      <Stack row collapse={2}>
        <Box bg='warning.500'>Collapse 2</Box>
        <Box bg='warning.600'>Collapse 2</Box>
        <Box bg='warning.700'>Collapse 2</Box>
      </Stack>
    </Box>
  )
}
