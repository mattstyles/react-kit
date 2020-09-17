
import {
  select, text
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { addBase } from '@internal/storybook'
import { Stack, Box, Flex } from '@raid-ui/layout'
import { Divider } from '@raid-ui/utility'
import { ButtonGroup } from '@raid-ui/buttongroup'
import { H2, H3, P, Link } from '@raid-ui/type'
import { Heart } from '@raid-ui/icons/Heart'
import { VolumeX } from '@raid-ui/icons/VolumeX'
import { Volume1 } from '@raid-ui/icons/Volume1'
import { Volume2 } from '@raid-ui/icons/Volume2'

import { Button } from './index'

export default {
  title: 'Components/Control/Button',
  decorators: [
    addBase()
  ]
}

export const variants = () => {
  return (
    <Button
      variant={select('Variant', {
        Solid: 'solid',
        Transparent: 'transparent',
        Outline: 'outline',
        Link: 'link',
        Naked: 'naked'
      }, 'solid')}
      size={select('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }, 'medium')}
      colour={select('Colour', {
        None: null,
        Critical: 'critical',
        Positive: 'positive',
        Info: 'info',
        Warning: 'warning'
      }, null)}
      rounding={select('Rounding', {
        Square: 'square',
        Rounded: 'rounded',
        Circular: 'circular'
      }, 'rounded')}
    >
      {text('Content', 'Click Me')}
    </Button>
  )
}

export const Basic = () => (
  <Stack>
    <Box>
      <Button variant='solid' onClick={action('clicking')}>Click</Button>
    </Box>
    <P>Buttons can work as an <Button as='a' variant='naked' href='#'>anchor</Button> but they have no styling and a <Link to='#'>Link</Link> component might be better</P>
  </Stack>
)

export const Types = () => (
  <Stack>
    <H2>Variants</H2>
    <ButtonGroup>
      <Button variant='solid'>Solid</Button>
      <Button variant='transparent'>Transparent</Button>
      <Button variant='outline'>Outline</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant='link'>Link</Button>
      <Button variant='naked'>Naked</Button>
      <Button variant='primary'>Primary</Button>
    </ButtonGroup>
    <H2>Colours</H2>
    <ButtonGroup>
      <Button colour='critical'>Critical</Button>
      <Button colour='positive'>Positive</Button>
      <Button colour='info'>Info</Button>
      <Button colour='warning'>Warning</Button>
    </ButtonGroup>
    <H2>Size</H2>
    <ButtonGroup>
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium</Button>
      <Button size='large'>Large</Button>
    </ButtonGroup>
    <H2>Rounding</H2>
    <ButtonGroup>
      <Button rounding='square'>Square</Button>
      <Button rounding='rounded'>Rounded</Button>
      <Button rounding='circular'>Circular</Button>
    </ButtonGroup>
    <H2>Disabled</H2>
    <ButtonGroup>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
      <Button disabled variant='transparent'>Disabled</Button>
      <Button disabled variant='outline'>Disabled</Button>
      <Button disabled variant='link'>Disabled</Button>
      <Button disabled variant='naked'>Disabled</Button>
    </ButtonGroup>
  </Stack>
)

export const Tight = () => (
  <Stack>
    <ButtonGroup>
      <Button>Ok</Button>
      <Button tight>Ok</Button>
      <Button tight icon rounding='circular'><Heart size={4} /></Button>
      <Button tight icon rounding='circular' sx={{ width: 8, height: 8, lineHeight: 0 }}>Ok</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button tight size='small'>S</Button>
      <Button tight size='medium'>M</Button>
      <Button tight size='large'>L</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button tight width={7} height={7} p={0} rounding='circular'>S</Button>
      <Button tight width={8} height={8} p={0} rounding='circular'>M8</Button>
      <Button tight width={9} height={9} rounding='circular'>L9</Button>
    </ButtonGroup>
  </Stack>
)

export const Group = () => (
  <Stack>
    <H3>Group Space 2</H3>
    <ButtonGroup space={2}>
      <Button variant='transparent'>Cancel</Button>
      <Button variant='primary'>Submit</Button>
    </ButtonGroup>
    <H3>Collapsible</H3>
    <ButtonGroup space={[2, 4]} collapse>
      <Button variant='transparent'>One</Button>
      <Button variant='solid'>Two</Button>
      <Button variant='outline'>Three</Button>
    </ButtonGroup>
    <H3>Tight with shape</H3>
    <ButtonGroup space={0}>
      <Button variant='solid' rounding='square' tight pr={2}><VolumeX size={16} /></Button>
      <Button variant='solid' rounding='square' tight px={2}><Volume1 size={16} /></Button>
      <Button variant='solid' rounding='square' tight pl={2}><Volume2 size={16} /></Button>
    </ButtonGroup>
    <Box>
      <ButtonGroup space={0} rounding='circular' borderRadius='circular' bg='positive.400'>
        <Button variant='transparent' rounding='square' tight pr={2} color='white'><VolumeX size={16} color='inherit' /></Button>
        <Button variant='transparent' rounding='square' tight px={2} color='white'><Volume1 size={16} /></Button>
        <Button variant='transparent' rounding='square' tight pl={2} color='white'><Volume2 size={16} /></Button>
      </ButtonGroup>
    </Box>
    <Box>
      <ButtonGroup space={0} bg='background.100' borderColor='dark.200' borderWidth={1} borderStyle='solid' borderRadius='circular' rounding='circular'>
        <Button variant='transparent' rounding='square' tight><VolumeX size={16} /></Button>
        <Divider isVertical mx={0} borderColor='dark.200' sx={{ height: '100%' }} />
        <Button variant='transparent' rounding='square' tight><Volume1 size={16} /></Button>
        <Divider isVertical mx={0} borderColor='dark.200' sx={{ height: '100%' }} />
        <Button variant='transparent' rounding='square' tight><Volume2 size={16} /></Button>
      </ButtonGroup>
    </Box>
  </Stack>
)

export const Icon = () => (
  <Stack>
    <ButtonGroup>
      <Button tight icon><Heart size={20} /></Button>
      <Button tight icon>Ok</Button>
      <Button tight>Ok</Button>
    </ButtonGroup>
    <Button fit variant='primary'>
      <Heart size={5} style={{ marginRight: 4 }} />Flambe
    </Button>
    <Button fit>
      Bruce<Flex ml={1} verticalAlign='middle'><Heart size={5} /></Flex>
    </Button>
    <Button fit align>
      <span>Bruce</span>
      <Heart size={5} />
    </Button>
    <Button fit align colour='positive'>
      <Heart size={5} />
      <span>Heart</span>
    </Button>
    <ButtonGroup>
      <Button icon tight><Heart size={3} /></Button>
      <Button icon tight><Heart size={5} /></Button>
      <Button icon tight><Heart size={8} /></Button>
      <Button icon tight><Heart size={10} /></Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button icon size='small'><Heart size={5} /></Button>
      <Button icon size='medium'><Heart size={5} /></Button>
      <Button icon size='large'><Heart size={5} /></Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button icon tight size='small'><Heart size={5} /></Button>
      <Button icon tight size='medium'><Heart size={5} /></Button>
      <Button icon tight size='large'><Heart size={5} /></Button>
    </ButtonGroup>
  </Stack>
)
