
import { View, Button } from 'react-basic-kit'
import { FaGithub, FaBars, FaCarrot, FaCss3 } from 'react-icons/fa'

import { addBase, Layout } from '../.storybook/base'

import { Tooltip } from './tooltip'

export default {
  title: 'Tooltip',
  decorators: [
    addBase(Layout)
  ]
}

export const Basic = () => {
  return (
    <View>
      <Tooltip label='Github'>
        <Button
          as='a'
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
    </View>
  )
}
