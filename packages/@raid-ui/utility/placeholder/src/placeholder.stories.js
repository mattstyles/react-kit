
import { addBase } from '@internal/storybook'
import { Box } from '@raid-ui/container'
import { Stack } from '@raid-ui/stack'
import { Spacer } from '@raid-ui/align'
import { Image } from '@raid-ui/image'

import { Placeholder } from './index'

export default {
  title: 'Components/Utility/Placeholder',
  decorators: [addBase()]
}

export const Basic = () => {
  return (
    <Image
      size='200px'
      loadingComponent={() => <Placeholder size='full' color1='light.700' color2='critical.400' />}
      src='http://www.fillmurray.com/400/400'
      fallbackSrc='http://via.placeholder.com/200/f02321/fff?text=nope'
      transitionDuration={10000}
    />
  )
}

export const Colours = () => {
  return (
    <Stack>
      <Placeholder />
      <Placeholder width={160} height={48} />
      <Placeholder sx={{ width: 180, height: 24, borderRadius: 2 }} />
      <Placeholder width={48} height={48} sx={{ borderRadius: 'circular' }} />
      <Placeholder
        width={160}
        height={2}
        color1='critical.400'
        color2='critical.600'
      />
      <Placeholder
        width={160}
        height={32}
        color1='rebeccapurple'
        color2='hsl(260, 40%, 20%)'
      />
    </Stack>
  )
}

export const Overlay = () => {
  return (
    <>
      <Box sx={{ width: 160, height: 24, bg: 'positive.400' }}>
        <Placeholder
          sx={{
            width: 'full',
            height: 'full'
          }}
          color1='light.500'
          color2='light.100'
        />
      </Box>
      <Spacer py={1} />
      <Box sx={{ width: 160, height: 24, bg: 'positive.400' }}>
        <Placeholder
          size='full'
          color1='dark.300'
          color2='dark.100'
        />
      </Box>
    </>
  )
}

export const Duration = () => {
  return (
    <>
      <Placeholder width={160} height={4} color1='critical.700' />
      <Spacer py={1} />
      <Placeholder width={160} height={4} color1='critical.700' duration={2000} />
      <Spacer py={1} />
      <Placeholder width={160} height={4} color1='critical.700' duration='spin' />
    </>
  )
}

export const Variants = () => {
  return (
    <>
      <Stack>
        <Placeholder height={4} />
        <Placeholder height={4} variant='darken' />
        <Placeholder height={4} variant='lighten' />
      </Stack>
    </>
  )
}
