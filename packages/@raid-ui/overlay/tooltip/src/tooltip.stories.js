
import { addBase } from '@internal/storybook'
import { View, Box } from '@raid-ui/container'
import { Button } from '@raid-ui/button'
import { Menu } from '@raid-ui/icons/Menu'
import { Github } from '@raid-ui/icons/Github'
import { Award } from '@raid-ui/icons/Award'
import { Monitor } from '@raid-ui/icons/Monitor'

import { Tooltip } from './index'

export default {
  title: 'Components/Overlay/Tooltip',
  decorators: [addBase()]
}

export const Basic = () => {
  return (
    <View>
      <Box>
        <Tooltip label='Github'>
          <Button
            as='a'
            href='#'
            icon
            tight
            size='medium'
            variant='transparent'
          >
            <Github size={5} />
          </Button>
        </Tooltip>
        <Tooltip variant='flat' label='Menu'>
          <Button
            icon
            tight
            size='medium'
            variant='transparent'
          >
            <Menu size={5} />
          </Button>
        </Tooltip>
        <Tooltip variant='small' label='Carrot'>
          <Button
            icon
            tight
            size='medium'
            variant='transparent'
            sx={{
              color: 'warning.700'
            }}
          >
            <Award size={5} />
          </Button>
        </Tooltip>
        <Tooltip variant='dark' label='I ❤️ CSS'>
          <Button
            icon
            tight
            size='medium'
            variant='outline'
            sx={{
              color: 'rebeccapurple'
            }}
          >
            <Monitor size={5} />
          </Button>
        </Tooltip>
      </Box>
      <Box mt={4}>
        <Tooltip label='Custom with sx' sx={{ color: 'positive.700' }}>
          <Button>
            Custom Styling
          </Button>
        </Tooltip>
      </Box>
    </View>
  )
}
