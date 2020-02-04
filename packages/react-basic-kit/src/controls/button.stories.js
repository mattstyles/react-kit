
import {
  withKnobs, select, text
} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import {
  GiBrutalHelm, GiFlame, GiPunchBlast, GiRosaShield, GiSpellBook
} from 'react-icons/gi'

import { addBase } from '../storybook/index'

import {
  Button, ButtonGroup, H3, P, Box, theme, Code
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
      <ButtonGroup iy={[4, 0]}>
        <Button variant='solid'>Solid</Button>
        <Button variant='transparent' sx={{ bg: 'red' }}>Transparent</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='link'>Link</Button>
        <Button variant='naked'>Naked</Button>
      </ButtonGroup>
      <P>Naked fits as an <Button as='a' variant='naked' href='#'>anchor</Button> but it deliberately has no distinctive styling so is best employed around other elements that could trigger an action like an image or an icon.</P>
      <H3>Colour</H3>
      <ButtonGroup iy={[4, 0]}>
        <Button colour='red'>Red</Button>
        <Button colour='green'>Green</Button>
        <Button colour='blue'>Blue</Button>
        <Button colour='yellow'>Yellow</Button>
      </ButtonGroup>
      <H3>Size</H3>
      <P>Each size still aligns to the grid, even if flowing over multiple lines</P>
      <ButtonGroup>
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
      <ButtonGroup iy={2}>
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
        <Button tight icon width={8} height={8} rounding='pill'>Ok</Button>
      </ButtonGroup>
      <P>Standard button sizes match horizontal spacing scale</P>
      <ButtonGroup display='block' mb={3}>
        <Button tight size='small'>S</Button>
        <Button tight size='medium'>M</Button>
        <Button tight size='large'>L</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button tight width={7} height={7} p={0} rounding='pill'>S</Button>
        <Button tight width={8} height={8} rounding='pill'>M8</Button>
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
      <H3>Condensed</H3>
      <ButtonGroup
        condensed
      >
        <Button variant='transparent'>One</Button>
        <Button variant='transparent'>Two</Button>
        <Button variant='transparent'>Three</Button>
      </ButtonGroup>
      <H3>Condensed with shape</H3>
      <ButtonGroup
        condensed
        rounding='200px'
        css={{
          marginLeft: 8
        }}
      >
        <Button variant='transparent' minWidth='auto' pr={2}>1</Button>
        <Button variant='transparent' minWidth='auto' px={2}>2</Button>
        <Button variant='transparent' minWidth='auto' pl={2}>3</Button>
      </ButtonGroup>
      <H3>Spacing</H3>
      <ButtonGroup spacing={8}>
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
      <ButtonGroup>
        <Button icon tight><GiBrutalHelm size={12} /></Button>
        <Button icon tight><GiBrutalHelm size={20} /></Button>
        <Button icon tight><GiBrutalHelm size={32} /></Button>
        <Button icon tight><GiBrutalHelm size={56} /></Button>
      </ButtonGroup>
      <P>Sizing variant honours icon prop</P>
      <ButtonGroup>
        <Button icon size='small'><GiBrutalHelm size={20} /></Button>
        <Button icon size='medium'><GiBrutalHelm size={20} /></Button>
        <Button icon size='large'><GiBrutalHelm size={20} /></Button>
        <Button size='large'><GiBrutalHelm size={20} /></Button>
      </ButtonGroup>
      <ButtonGroup mt={2}>
        <Button icon tight size='small'><GiBrutalHelm size={20} /></Button>
        <Button icon tight size='medium'><GiBrutalHelm size={20} /></Button>
        <Button icon tight size='large'><GiBrutalHelm size={20} /></Button>
        <Button tight size='large'><GiBrutalHelm size={20} /></Button>
      </ButtonGroup>
      <H3>Using button variant props</H3>
      <P>Icons have no issues with all the various button variant props that can be applied</P>
      <ButtonGroup spacing={2}>
        <Button icon tight variant='outline'><GiRosaShield size={20} /></Button>
        <Button icon tight variant='solid' colour='blue'><GiPunchBlast size={20} /></Button>
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
      <ButtonGroup bg='gray.200' rounding={0} p={3} condensed>
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
      <ButtonGroup bg='gray.100' spacing={1} p={2}>
        <Button tight icon variant='transparent' rounding='pill'>
          <GiPunchBlast size={20} color={theme.colors.blue[600]} />
        </Button>
        <Button tight icon variant='transparent' rounding='pill'>
          <GiRosaShield size={20} color={theme.colors.blue[600]} />
        </Button>
        <Button tight icon variant='transparent' rounding='pill'>
          <GiSpellBook size={20} color={theme.colors.blue[600]} />
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
        Red: 'red',
        Green: 'green',
        Blue: 'blue',
        Yellow: 'yellow'
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
