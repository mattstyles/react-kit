
import {
  withKnobs, select, text
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import {
  GiBrutalHelm, GiFlame, GiPunchBlast, GiRosaShield, GiSpellBook
} from 'react-icons/gi'
import { FiVolumeX, FiVolume1, FiVolume2 } from 'react-icons/fi'

import { addBase } from '../storybook/index'

import {
  Box, Spacer, Flex,
  Button, ButtonGroup,
  H3, P, Code
} from '../index'

export default {
  title: 'Components/Controls/Button',
  decorators: [
    addBase(),
    withKnobs
  ]
}

export const Basic = () => {
  return (
    <>
      <ButtonGroup>
        <Button type='icon' onClick={action('Click')}>Click me</Button>
        <Button as='a' href='#'>As anchor</Button>
      </ButtonGroup>
      <H3>Variants</H3>
      <P>Variants exposes 3 properties on the theme, <Code>buttons</Code>, <Code>buttonColours</Code>, and <Code>buttonRounding</Code>. The <Code>size</Code> variants are not exposed.</P>
      <Flex row>
        <Button variant='solid'>Solid</Button>
        <Button variant='transparent'>Transparent</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='link'>Link</Button>
        <Button variant='naked'>Naked</Button>
        <Button variant='primary'>Primary</Button>
      </Flex>
      <P>Naked fits as an <Button as='a' variant='naked' href='#'>anchor</Button> but it deliberately has no distinctive styling so is best employed around other elements that could trigger an action like an image or an icon.</P>
      <H3>Colour</H3>
      <ButtonGroup>
        <Button colour='critical'>Red</Button>
        <Button colour='positive'>Green</Button>
        <Button colour='info'>Blue</Button>
        <Button colour='warning'>Yellow</Button>
      </ButtonGroup>
      <H3>Size</H3>
      <P>Each size still aligns to the grid, even if flowing over multiple lines</P>
      <ButtonGroup alignItems='center'>
        <Button size='small'>Small</Button>
        <Button size='medium'>Medium</Button>
        <Button size='large'>Large</Button>
      </ButtonGroup>
      <H3>Rounding</H3>
      <ButtonGroup>
        <Button rounding='square'>Square</Button>
        <Button rounding='rounded'>Rounded</Button>
        <Button rounding='pill'>Pill</Button>
      </ButtonGroup>
      <H3>Misc</H3>
      <P>Padding when min-width is exceeded</P>
      <ButtonGroup alignItems='center'>
        <Button sx={{ display: 'block' }} size='small'>Some longer text</Button>
        <Button sx={{ display: 'block' }} size='medium'>Some longer text</Button>
        <Button sx={{ display: 'block' }} size='large'>Some longer text</Button>
      </ButtonGroup>
      <P>Text overflow when a width in supplied</P>
      <Button width='160px'>Text overflow to multiple lines </Button>
      <P>Minimum width so that small buttons retain some shape</P>
      <Button>Ok</Button>
      <P>Disabled button styling</P>
      <ButtonGroup>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button disabled variant='transparent'>Disabled</Button>
        <Button disabled variant='outline'>Disabled</Button>
        <Button disabled variant='link'>Disabled</Button>
        <Button disabled variant='naked'>Disabled</Button>
      </ButtonGroup>
      <P>Tight, fits to the content. (first button is default size)</P>
      <ButtonGroup>
        <Button>Ok</Button>
        <Button tight>Ok</Button>
        <Button tight icon rounding='pill'><GiBrutalHelm size={20} /></Button>
        <Button tight icon rounding='pill' sx={{ width: 8, height: 8, lineHeight: 0 }}>Ok</Button>
      </ButtonGroup>
      <P>Standard button sizes match horizontal spacing scale</P>
      <ButtonGroup display='block'>
        <Button tight size='small'>S</Button>
        <Button tight size='medium'>M</Button>
        <Button tight size='large'>L</Button>
      </ButtonGroup>
      <Spacer py={3} />
      <ButtonGroup>
        <Button tight width={7} height={7} p={0} rounding='pill'>S</Button>
        <Button tight width={8} height={8} p={0} rounding='pill'>M8</Button>
        <Button tight width={9} height={9} rounding='pill'>L9</Button>
      </ButtonGroup>
      <P><Code>Sx</Code> prop can be used</P>
      <Button sx={{ width: 'fit' }}>Width: Fit</Button>
    </>
  )
}

export const group = () => {
  return (
    <>
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
        <Button variant='solid' tight pr={2}><FiVolumeX size={16} /></Button>
        <Button variant='solid' tight px={2}><FiVolume1 size={16} /></Button>
        <Button variant='solid' tight pl={2}><FiVolume2 size={16} /></Button>
      </ButtonGroup>
      <Spacer py={2} />
      <ButtonGroup space={0} rounding='circular' borderRadius='circular' bg='positive.400'>
        <Button variant='transparent' tight pr={2} color='white'><FiVolumeX size={16} color='inherit' /></Button>
        <Button variant='transparent' tight px={2} color='white'><FiVolume1 size={16} /></Button>
        <Button variant='transparent' tight pl={2} color='white'><FiVolume2 size={16} /></Button>
      </ButtonGroup>
      <H3>Spacing</H3>
      <P>Default: 0</P>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <P>Space 8</P>
      <ButtonGroup space={8}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  )
}

export const icon = () => {
  return (
    <>
      <H3>Size equalising</H3>
      <P>Icon prop equalises button padding, so is not constrained to icon content</P>
      <ButtonGroup>
        <Button tight icon><GiBrutalHelm size={20} /></Button>
        <Button tight icon>Ok</Button>
        <Button tight>Ok</Button>
      </ButtonGroup>
      <H3>Adding icons to text buttons and composing children</H3>
      <P>Icons and text composed into children with no extra effort other than spacing of children</P>
      <Box width='200px'>
        <Button my={2} fit>
          <GiFlame size={18} />Flambe
        </Button>
        <Button fit>
          Bruce<GiPunchBlast size={20} style={{ verticalAlign: 'middle', marginLeft: 4 }} />
        </Button>
      </Box>
      <P>However, due to how text nodes are positioned icons and text often look better if the text is wrapped in a span (or use a <Code>Text</Code> component). The align prop can be used to further aid alignment, or, you can do it by hand and wrap each element in a <Code>Box</Code> to align things, which is handy when icons don’t match perfectly with text.</P>
      <P>The <Code>align</Code> prop only adds styling properties to <Code>svg</Code> elements (as these are commonly used for icons). If you are using images or some other mechanism then the alignment may not work as you desire, at which point you’ll need to extend the <Code>Button</Code> component or nudge things around by hand.</P>
      <Box sx={{ width: '200px' }}>
        <Button my={2} fit align>
          <GiFlame size={18} />
          <span>Flambe</span>
        </Button>
        <Button fit align>
          <span>Bruce</span>
          <GiPunchBlast size={20} />
        </Button>
      </Box>
      <H3>Icon size</H3>
      <P>The tight flag will change padding and without a line-height from text it is quite possible to break the grid as the button size will match the size of the icon you supply.</P>
      <ButtonGroup alignItems='center'>
        <Button icon tight><GiBrutalHelm size={12} /></Button>
        <Button icon tight><GiBrutalHelm size={20} /></Button>
        <Button icon tight><GiBrutalHelm size={32} /></Button>
        <Button icon tight><GiBrutalHelm size={56} /></Button>
      </ButtonGroup>
      <P>Sizing variant honours icon prop</P>
      <ButtonGroup alignItems='center'>
        <Button icon size='small'><GiBrutalHelm size={20} /></Button>
        <Button icon size='medium'><GiBrutalHelm size={20} /></Button>
        <Button icon size='large'><GiBrutalHelm size={20} /></Button>
        <Button size='large'><GiBrutalHelm size={20} /></Button>
      </ButtonGroup>
      <Spacer py={2} />
      <ButtonGroup>
        <Button icon tight size='small'><GiBrutalHelm size={20} /></Button>
        <Button icon tight size='medium'><GiBrutalHelm size={20} /></Button>
        <Button icon tight size='large'><GiBrutalHelm size={20} /></Button>
        <Button tight size='large'><GiBrutalHelm size={20} /></Button>
      </ButtonGroup>
      <H3>Using button variant props</H3>
      <P>Icons have no issues with all the various button variant props that can be applied</P>
      <ButtonGroup space={4}>
        <Button icon tight variant='outline'><GiRosaShield size={20} /></Button>
        <Button icon tight variant='solid' colour='info'><GiPunchBlast size={20} /></Button>
        <Button icon tight variant='transparent' size='large'><GiFlame size={32} /></Button>
      </ButtonGroup>
      <H3>Nuking the minimum width default</H3>
      <P>Buttons have a minimum width by default so the <Code>tight</Code> prop is often required to square off a button size</P>
      <ButtonGroup>
        <Button icon><GiFlame size={20} /></Button>
        <Button icon tight><GiFlame size={20} /></Button>
      </ButtonGroup>
      <H3>Icon buttons in groups</H3>
      <P>Icon buttons are often found in groups</P>
      <ButtonGroup bg='background.200' rounding={0} p={3} space={0}>
        <Button tight icon variant='transparent'>
          <GiPunchBlast size={20} />
        </Button>
        <Button tight icon variant='transparent'>
          <GiRosaShield size={20} />
        </Button>
        <Button tight icon variant='transparent'>
          <GiSpellBook size={20} />
        </Button>
      </ButtonGroup>
      <P>Buttongroup and button props can be quite expressive used together</P>
      <ButtonGroup bg='background.100' space={1} p={2}>
        <Button tight icon variant='transparent' rounding='pill' sx={{ color: 'critical.600' }}>
          <GiPunchBlast size={20} color='inherit' />
        </Button>
        <Button tight icon variant='transparent' rounding='pill' sx={{ color: 'info.600' }}>
          <GiRosaShield size={20} color='inherit' />
        </Button>
        <Button tight icon variant='transparent' rounding='pill' sx={{ color: 'warning.600' }}>
          <GiSpellBook size={20} color='inherit' />
        </Button>
      </ButtonGroup>
    </>
  )
}

export const FullWidth = () => {
  return (
    <>
      <Button fit>Full width</Button>
      <Button fit size='large' mt={2}>Large full width</Button>
      <Button fit rounding='pill' mt={2}>Pill full width</Button>
      <Button width='full' mt={2}>Full width prop</Button>
    </>
  )
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
        Pill: 'pill'
      }, 'rounded')}
    >
      {text('Content', 'Click Me')}
    </Button>
  )
}
