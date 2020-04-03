
import {
  withKnobs, text, boolean
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import {
  View, Box, Flex, Spread, Spacer,
  Input, Button, ButtonGroup,
  Text, H2, Card, Image
} from '@raid/basic-kit'
import { FaCarrot, FaCog, FaGithub, FaBars } from 'react-icons/fa'
import { Icon } from 'react-icons-kit'
import { heart } from 'react-icons-kit/fa/heart'
import { edit } from 'react-icons-kit/fa/edit'
import { copy } from 'react-icons-kit/fa/copy'
import { close } from 'react-icons-kit/fa/close'
import { cog } from 'react-icons-kit/fa/cog'

import { addBase, Layout } from '../.storybook/base'

import { Header, Dropdown, DropdownItem } from './'

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
            <Button icon tight rounding='pill' variant='transparent' sx={{ color: 'critical.500', lineHeight: '1!important' }}>
              <Icon icon={heart} size={16} color='inherit' />
            </Button>
            <Button icon tight rounding='pill' variant='transparent' sx={{ color: 'info.600', lineHeight: '1!important' }}>
              <Icon icon={edit} size={16} color='inherit' />
            </Button>
            <Button icon tight rounding='pill' variant='transparent' sx={{ color: 'info.600', lineHeight: '1!important' }}>
              <Icon icon={copy} size={16} color='inherit' />
            </Button>
            <Button icon tight rounding='pill' variant='transparent' sx={{ color: 'text.700', lineHeight: '1!important' }}>
              <Icon icon={close} size={16} color='inherit' />
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
          <Button icon tight rounding='pill' variant='transparent' sx={{ color: 'critical.600' }}>
            <Icon icon={heart} size={24} color='inherit' />
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
        <Button variant='transparent' icon tight rounding='pill'>
          <Icon icon={cog} size={20} />
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
