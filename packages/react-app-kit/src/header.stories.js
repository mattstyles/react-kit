
import { View, Button, Box, Text, Flex, Input, ButtonGroup, H2 } from 'react-basic-kit'
import { FaCarrot, FaCog, FaGithub } from 'react-icons/fa'

import { addBase } from '../.storybook/base'

import { Header } from './header'

export default {
  title: 'Header',
  decorators: [
    addBase()
  ]
}

export const Basic = () => {
  return (
    <View>
      <Header>
        <Text as='h1'>Title</Text>
        <Box sx={{ mx: 'auto' }} />
        <Button variant='transparent'>Nav</Button>
      </Header>
    </View>
  )
}

export const Controls = () => {
  return (
    <View>
      <Header sx={{ px: 0 }}>
        <Flex flexDirection='row' justifyContent='space-between' sx={{ maxWidth: 960, mx: 'auto', flex: 1 }}>
          <Flex flexDirection='row' alignItems='center'>
            <FaCarrot size={18} />
            <Text sx={{ ml: 2 }} size={5} as='h1'>Title</Text>

          </Flex>
          <Flex flexDirection='row' alignItems='center'>
            <Button colour='blue' size='medium' sx={{ mr: 2, maxHeight: 38 }}>Action</Button>
            <Input
              placeholder='Search...'
              variant='flat'
              sx={{
                borderColor: 'transparent',
                bg: 'gray.200'
              }}
            />
            <ButtonGroup sx={{ ml: 2 }} ix={0}>
              <Button as='a' icon tight size='medium' variant='transparent'><FaGithub size={18} /></Button>
              <Button icon tight size='medium' variant='transparent'><FaCog size={18} /></Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Header>
      <View isPadded as='main' sx={{ mx: 'auto', maxWidth: 960 }}>
        <H2>Content</H2>
      </View>
    </View>
  )
}
