
import { View, Button, Box } from 'react-basic-kit'
import { FaGithub, FaBars, FaCarrot, FaCss3 } from 'react-icons/fa'

import { addBase, Layout } from '../.storybook/base'

import { Tooltip } from './'

export default {
  title: 'Tooltip',
  decorators: [
    addBase(Layout)
  ]
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
            <FaGithub size={18} />
          </Button>
        </Tooltip>
        <Tooltip variant='flat' label='Menu'>
          <Button
            icon
            tight
            size='medium'
            variant='transparent'
          >
            <FaBars size={18} />
          </Button>
        </Tooltip>
        <Tooltip variant='small' label='Carrot'>
          <Button
            icon
            tight
            size='medium'
            variant='transparent'
            sx={{
              color: 'yellow.700'
            }}
          >
            <FaCarrot color='inherit' size={18} />
          </Button>
        </Tooltip>
        <Tooltip variant='dark' label='I ❤️ CSS'>
          <Button
            icon
            tight
            size='medium'
            variant='transparent'
            sx={{
              color: 'rebeccapurple'
            }}
          >
            <FaCss3 color='inherit' size={18} />
          </Button>
        </Tooltip>
      </Box>
      <Box mt={4}>
        <Tooltip label='Custom with sx' sx={{ color: 'green.700' }}>
          <Button>
            Custom Styling
          </Button>
        </Tooltip>
      </Box>
    </View>
  )
}
