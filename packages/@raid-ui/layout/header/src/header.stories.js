
import {
  text, boolean
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { addBase, Layout } from '@internal/storybook'
import { Screen, View, Box, Spread, Flex } from '@raid-ui/container'
import { Spacer } from '@raid-ui/align'
import { Card } from '@raid-ui/card'
import { Image } from '@raid-ui/image'
import { Text, H2 } from '@raid-ui/type'
import { Button, ButtonGroup, Input } from '@raid-ui/control'
import { Settings } from '@raid-ui/icons/Settings'
import { Github } from '@raid-ui/icons/Github'
import { Box as BoxIcon } from '@raid-ui/icons/Box'
import { Menu } from '@raid-ui/icons/Menu'
import { Heart } from '@raid-ui/icons/Heart'
import { X } from '@raid-ui/icons/X'
import { Copy } from '@raid-ui/icons/Copy'
import { Edit3 } from '@raid-ui/icons/Edit3'
import { Dropdown, DropdownItem } from '@raid-ui/dropdown'

import { Header } from './index'

export default {
  title: 'Components/Layout/Header',
  decorators: [addBase({
    Layout: ({ children }) => <Screen>{children}</Screen>
  })]
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
      <Header>
        <Spread sx={{ maxWidth: 960, mx: 'auto', flex: 1 }}>
          <Spread>
            <BoxIcon size={5} />
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
              <Button as='a' href='#' icon tight size='medium' variant='transparent'>
                <Github size={18} />
              </Button>
              <Button icon tight size='medium' variant='transparent'>
                <Settings size={5} />
              </Button>
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
          <Text sx={{ position: 'absolute', width: 'full', textAlign: 'center' }} size={5} as='h1'>Title</Text>
          <Button icon tight rounding='pill' size='medium' variant='transparent'>
            <Menu size={5} />
          </Button>
          <Spread>
            <Button as='a' href='#' icon tight rounding='circular' size='medium' variant='transparent'>
              <Github size={5} />
            </Button>
            <Spacer mx={1} />
            <Button icon tight rounding='circular' size='medium' variant='transparent'>
              <Settings size={5} />
            </Button>
          </Spread>
        </Spread>
      </Header>
    </View>
  )
}

const Quote = ({
  n,
  author,
  children
}) => {
  return (
    <Card sx={{ px: 5, pt: 4, mb: 2 }}>
      <Flex row sx={{ alignItems: 'center' }}>
        <Image
          src={`https://www.placecage.com/c/${n}/${n}`}
          sx={{ width: 9, height: 9, borderRadius: 'circular' }}
        />
        <Flex ml={5} flex={1}>
          {author && (
            <Text size={3} sx={{ fontWeight: 700 }}>{author}</Text>
          )}
          <Text size={5} sx={{ fontStyle: 'italic', pt: 3, pb: 4 }}>{children}</Text>
          <Spread sx={{ ml: -2 }}>
            <Button icon tight rounding='circular' variant='transparent' sx={{ color: 'critical.500', lineHeight: '1!important' }}>
              <Heart size={4} color='inherit' />
            </Button>
            <Button icon tight rounding='circular' variant='transparent' sx={{ color: 'info.600', lineHeight: '1!important' }}>
              <Edit3 size={4} color='inherit' />
            </Button>
            <Button icon tight rounding='circular' variant='transparent' sx={{ color: 'info.600', lineHeight: '1!important' }}>
              <Copy size={4} color='inherit' />
            </Button>
            <Button icon tight rounding='circular' variant='transparent' sx={{ color: 'text.700', lineHeight: '1!important' }}>
              <X size={4} color='inherit' />
            </Button>
          </Spread>
        </Flex>
      </Flex>
    </Card>
  )
}
Quote.defaultProps = {
  n: 80
}

export const Sticky = () => {
  return (
    <View>
      <Box>
        <Header variant='sticky'>
          <Flex row>
            <Button as='a' href='#' variant='link'>Help</Button>
            <Button as='a' href='#' variant='link'>Status</Button>
          </Flex>
          <Button icon tight rounding='circular' variant='transparent' sx={{ color: 'critical.600' }}>
            <Heart size={5} color='inherit' />
          </Button>
          <Flex row>
            <Button as='a' href='#' variant='link'>Support</Button>
            <Dropdown label='Create' buttonProps={{ colour: 'info' }}>
              <DropdownItem onSelect={action('team')}>Team</DropdownItem>
              <DropdownItem onSelect={action('group')}>Group</DropdownItem>
              <DropdownItem onSelect={action('product')}>Product</DropdownItem>
            </Dropdown>
          </Flex>
        </Header>
        <Box
          sx={{
            width: 'full',
            height: 240,
            background: 'repeating-linear-gradient(-26.5deg, white 0%, white 25%, rebeccapurple 25%, rebeccapurple 50%, white 50%, white 75%, rebeccapurple 75%, rebeccapurple 100%)',
            backgroundSize: '128px 64px',
            animation: 'slide 10s infinite linear',
            '@keyframes slide': {
              from: {
                backgroundPosition: '0%'
              },
              to: {
                backgroundPosition: '100%'
              }
            }
          }}
        />
      </Box>
      <Layout>
        <Spacer py={3} />
        <Quote n={80} author='Mother Theresa'>Spread love everywhere you go. Let no one ever come to you without leaving happier.</Quote>
        <Quote n={85} author='Maya Angelou'>You will face many defeats in life, but never let yourself be defeated.</Quote>
        <Quote n={90} author='Dr Seuss'>You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.</Quote>
        <Quote n={95} author='Coco Chanel'>The most courageous act is still to think for yourself. Aloud.</Quote>
      </Layout>
    </View>
  )
}

export const Fixed = () => {
  return (
    <View>
      <Header variant='fixed' sx={{ py: 1 }}>
        <Text as='h1' size={5}>Fixed header</Text>
        <Button variant='transparent' icon tight rounding='circular'>
          <Settings size={5} />
        </Button>
      </Header>
      <Spacer py={6} />
      <Layout>
        <Quote n={80} author='Mother Theresa'>Spread love everywhere you go. Let no one ever come to you without leaving happier.</Quote>
        <Quote n={85} author='Maya Angelou'>You will face many defeats in life, but never let yourself be defeated.</Quote>
        <Quote n={90} author='Dr Seuss'>You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.</Quote>
        <Quote n={95} author='Coco Chanel'>The most courageous act is still to think for yourself. Aloud.</Quote>
      </Layout>
    </View>
  )
}
