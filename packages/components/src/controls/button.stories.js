
import { action } from '@storybook/addon-actions'
import { GiBrutalHelm, GiFlame, GiPunchBlast, GiRosaShield, GiSpellBook } from 'react-icons/gi'

import { Button } from './button'
import { ButtonGroup } from './buttongroup'
import { theme } from '../theme/index'

export default {
  title: 'Components|Controls/Button'
}

export const Basic = () => {
  return (
    <>
      <ButtonGroup>
        <Button type='icon' onClick={action('Click')}>Click me</Button>
        <Button as='a' href='#'>As anchor</Button>
      </ButtonGroup>
      <h3>Variants</h3>
      <ButtonGroup>
        <Button variant='solid'>Solid</Button>
        <Button variant='transparent'>Transparent</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='link'>Link</Button>
      </ButtonGroup>
      <h3>Colour</h3>
      <ButtonGroup>
        <Button colour='red'>Red</Button>
        <Button colour='green'>Green</Button>
        <Button colour='blue'>Blue</Button>
        <Button colour='yellow'>Yellow</Button>
      </ButtonGroup>
      <h3>Size</h3>
      <p>Each size still aligns to the grid, even if flowing over multiple lines</p>
      <ButtonGroup>
        <Button size='small'>Small</Button>
        <Button size='medium'>Medium</Button>
        <Button size='large'>Large</Button>
      </ButtonGroup>
      <h3>Rounding</h3>
      <ButtonGroup>
        <Button rounding='square'>Square</Button>
        <Button rounding='rounded'>Rounded</Button>
        <Button rounding='pill'>Pill</Button>
      </ButtonGroup>
      <h3>Misc</h3>
      <Button width='160px'>Text overflow to multiple lines </Button>
      <p>Minimum width so that small buttons retain some shape</p>
      <Button>Ok</Button>
      <p>Disabled button styling</p>
      <ButtonGroup>
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
        <Button disabled variant='transparent'>Disabled</Button>
        <Button disabled variant='outline'>Disabled</Button>
        <Button disabled variant='link'>Disabled</Button>
      </ButtonGroup>
      <p>Tight, fits to the content. (first button is default size)</p>
      <ButtonGroup>
        <Button>Ok</Button>
        <Button tight>Ok</Button>
        <Button tight icon rounding='pill'><GiBrutalHelm size={20} /></Button>
        <Button tight icon width={8} height={8} rounding='pill'>Ok</Button>
      </ButtonGroup>
      <p>Standard button sizes match horizontal spacing scale</p>
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
    </>
  )
}

export const group = () => {
  return (
    <>
      <h3>Condensed</h3>
      <ButtonGroup
        condensed
      >
        <Button variant='transparent'>One</Button>
        <Button variant='transparent'>Two</Button>
        <Button variant='transparent'>Three</Button>
      </ButtonGroup>
      <h3>Condensed with shape</h3>
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
      <h3>Spacing</h3>
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
      <h3>Size equalising</h3>
      <p>Icon prop equalises button padding, so is not constrained to icon content</p>
      <ButtonGroup>
        <Button tight icon><GiBrutalHelm size={20} /></Button>
        <Button tight icon>Ok</Button>
      </ButtonGroup>
      <h3>Adding icons to text buttons and composing children</h3>
      <p>Icons and text composed into children with no extra effort other than spacing of children</p>
      <div style={{ width: '200px' }}>
        <Button my={2} fit>
          <GiFlame size={18} />Flambe
        </Button>
        <Button fit>
          Bruce<GiPunchBlast size={20} style={{ verticalAlign: 'middle', marginLeft: 4 }} />
        </Button>
      </div>
      <p>However, due to how text nodes are positioned icons and text often look better if the text is wrapped in a span (or use a <code>Text</code> component). The align prop can be used to further aid alignment, or, you can do it by hand and wrap each element in a <code>Box</code> to align things, which is handy when icons don’t match perfectly with text.</p>
      <p>The <code>align</code> prop only adds styling properties to <code>svg</code> elements (as these are commonly used for icons). If you are using images or some other mechanism then the alignment may not work as you desire, at which point you’ll need to extend the <code>Button</code> component or nudge things around by hand.</p>
      <div style={{ width: '200px' }}>
        <Button my={2} fit align>
          <GiFlame size={18} />
          <span>Flambe</span>
        </Button>
        <Button fit align>
          <span>Bruce</span>
          <GiPunchBlast size={20} />
        </Button>
      </div>
      <h3>Icon size</h3>
      <p>The tight flag will change padding and without a line-height from text it is quite possible to break the grid as the button size will match the size of the icon you supply.</p>
      <ButtonGroup>
        <Button icon tight><GiBrutalHelm size={12} /></Button>
        <Button icon tight><GiBrutalHelm size={20} /></Button>
        <Button icon tight><GiBrutalHelm size={32} /></Button>
        <Button icon tight><GiBrutalHelm size={56} /></Button>
      </ButtonGroup>
      <h3>Using button variant props</h3>
      <p>Icons have no issues with all the various button variant props that can be applied</p>
      <ButtonGroup spacing={2}>
        <Button icon tight variant='outline'><GiRosaShield size={20} /></Button>
        <Button icon tight variant='solid' colour='blue'><GiPunchBlast size={20} /></Button>
        <Button icon tight variant='transparent' size='large'><GiFlame size={32} /></Button>
      </ButtonGroup>
      <h3>Nuking the minimum width default</h3>
      <p>Buttons have a minimum width by default so the <code>tight</code> prop is often required to square off a button size</p>
      <ButtonGroup>
        <Button icon><GiFlame size={20} /></Button>
        <Button icon tight><GiFlame size={20} /></Button>
      </ButtonGroup>
      <h3>Icon buttons in groups</h3>
      <p>Icon buttons are often found in groups</p>
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
      <p>Buttongroup and button props can be quite expressive used together</p>
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
