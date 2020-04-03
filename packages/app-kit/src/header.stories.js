
import {
  withKnobs, text, boolean
} from '@storybook/addon-knobs'
import { View, Button, Box, Text, Spread, Input, ButtonGroup, H2 } from '@raid/basic-kit'
import { FaCarrot, FaCog, FaGithub, FaBars } from 'react-icons/fa'

import { addBase } from '../.storybook/base'

import { Header } from './header'

export default {
  title: 'Header',
  decorators: [
    addBase(),
    withKnobs
  ]
}

export const Basic = () => {
  return (
    <View>
      <Header
        hasBorder={boolean('hasBorder', true)}
        sx={{
          bg: text('Background', 'transparent'),
          color: text('Color', 'inherit')
        }}
      >
        <Text as='h1'>{text('Title', 'Title')}</Text>
        <Box sx={{ mx: 'auto' }} />
        <Button variant='transparent' sx={{ color: 'inherit' }}>Nav</Button>
      </Header>
    </View>
  )
}

export const Controls = () => {
  return (
    <View>
      <Header sx={{ px: 0 }}>
        <Spread sx={{ maxWidth: 960, mx: 'auto', flex: 1 }}>
          <Spread>
            <FaCarrot size={18} />
            <Text sx={{ ml: 2 }} size={5} as='h1'>Title</Text>
          </Spread>
          <Spread>
            <Button colour='info' size='medium' sx={{ mr: 2 }}>Action</Button>
            <Input
              placeholder='Search...'
              variant='flat'
              sx={{
                borderColor: 'transparent',
                bg: 'background.200'
              }}
            />
            <ButtonGroup sx={{ ml: 2 }} ix={0}>
              <Button as='a' icon tight size='medium' variant='transparent'><FaGithub size={18} /></Button>
              <Button icon tight size='medium' variant='transparent'><FaCog size={18} /></Button>
            </ButtonGroup>
          </Spread>
        </Spread>
      </Header>
      <View isPadded isFlex as='main' sx={{ mx: 'auto', maxWidth: 960 }}>
        <H2>Content</H2>
      </View>
    </View>
  )
}

export const Small = () => {
  return (
    <View>
      <Header hasBorder={false}>
        <Spread sx={{ flex: 1, maxWidth: '480px', mx: 'auto', position: 'relative' }}>
          <Button icon tight rounding='pill' size='medium' variant='transparent'><FaBars size={18} /></Button>
          <Text sx={{ position: 'absolute', width: 'full', textAlign: 'center' }} size={5} as='h1'>Title</Text>
          <Spread>
            <Button as='a' href='#' icon tight rounding='pill' size='medium' variant='transparent'><FaGithub size={18} /></Button>
            <Button icon tight rounding='pill' size='medium' variant='transparent'><FaCog size={18} /></Button>
          </Spread>
        </Spread>
      </Header>
    </View>
  )
}
