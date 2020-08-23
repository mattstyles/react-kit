
import { addBase } from '@internal/storybook'
import { css } from '@styled-system/css'
import styled from 'styled-components'

import { Badge } from './index'
import { Text, H2 } from '@raid-ui/type'
import { Spacer } from '@raid-ui/align'
import { Box } from '@raid-ui/container'

export default {
  title: 'Components/Type/Badge',
  decorators: [addBase()]
}

export const Basic = () => (
  <>
    <Badge variant='standard'>Standard</Badge>
    <Badge variant='primary'>Primary</Badge>
    <H2>Within a title <Badge>Badge</Badge></H2>
    <H2>Within a title, with colour <Badge sx={{ bg: 'info.600', color: 'white' }}>Badge</Badge></H2>
    <Text>Outline variant <Badge variant='outline'>Badge</Badge></Text>
    <Spacer my={4} />
    <Text>Outline variant, with colour <Badge variant='outline' sx={{ color: 'critical.700' }}>Badge</Badge></Text>
  </>
)

const Avatar = styled(Box)(
  css({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    bg: 'background.800',
    color: 'white',
    fontWeight: 700,
    fontSize: 5,
    size: 10,
    borderRadius: 'circular',
    position: 'relative'
  })
)

export const Custom = () => (
  <>
    <Avatar>
      <Text sx={{ fontWeight: 700 }} size={5}>MS</Text>
      <Badge
        variant='circular'
        sx={{
          position: 'absolute',
          top: -1,
          right: -1,
          bg: 'primary',
          color: 'white'
        }}
      >
        7
      </Badge>
    </Avatar>
    <Spacer my={3} />
    <Avatar>
      MS
      <Badge
        variant='circular'
        sx={{
          bg: 'critical.700',
          color: 'white',
          position: 'absolute',
          right: -1,
          bottom: -1
        }}
      >
        12
      </Badge>
    </Avatar>
  </>
)
