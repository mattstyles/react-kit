
import { action } from '@storybook/addon-actions'

import { addBase } from '../storybook/index'
import { redlineButtonTheme } from '../storybook/themes'
import { Layout } from '../storybook/layouts'

import { Button, ButtonGroup, H2, H3, P, Pre, Code, Markdown } from '../index'

export default {
  title: 'Usage/Controls/Button',
  decorators: [addBase({
    theme: redlineButtonTheme,
    Layout: Layout
  })]
}

export const CustomVariant = () => {
  return (
    <>
      <Button variantTest='experimental'>Experimental</Button>
      <Button ctx='exp'>Context Exp</Button>
      <Button rounding='pill'>Pillow</Button>
      <H2>Custom Variant</H2>
      <H3>Flat object variant</H3>
      <P>Use the <Code>buttons</Code> variant in the theme to define a new button.</P>
      <P><Code>theme.buttons</Code> can be extended by using the <Code>extend</Code> utility method to perform a merge on the variant object.</P>
      <P>Using <Code>extend</Code> ensures that default variants are maintained, if you don’t want them then write over the <Code>variant</Code> key in your own theme.</P>
      <Pre>{`import { utils } from 'react-basic-kit'

const theme = extend({
  variants: {
    buttons: {
      redline: {
        bg: 'transparent',
        color: 'critical.500',
        borderColor: 'critical.500',
        '&:hover': {
          bg: 'critical.500',
          color: tokens.type.body.inverse
        },
        '&:active': {
          bg: 'critical.600'
        }
      }
    }
  }
})`}
      </Pre>
      <Button
        display='block'
        my={2}
        variant='redline'
        onClick={action('redline variant')}
      >
        Coloured outline
      </Button>
      <P>Check adding a custom variant has maintained the library variants:</P>
      <ButtonGroup iy={[3, 2, 0]} sx={{ display: 'block', mb: 2 }}>
        <Button size='massive'>Size: Massive</Button>
        <Button variant='transparent'>Variant: Transparent</Button>
        <Button colour='positive'>Colour: Positive</Button>
        <Button rounding='pill'>Rounding: Pill</Button>
      </ButtonGroup>
      <Markdown>{`
## Contextual Variant

Normal \`styled-system\` variants are unaware of instance methods, however, if you want your variants to respond to instance props then use the \`context\` helper function to do this.`}
      </Markdown>
      <ButtonGroup iy={[3, 2, 0]}>
        <Button variant='lineout' colour='info'>Outrun</Button>
        <Button variant='lineout' colour='positive'>Outrun</Button>
      </ButtonGroup>
    </>
  )
}
