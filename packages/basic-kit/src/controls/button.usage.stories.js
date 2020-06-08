
import { action } from '@storybook/addon-actions'

import { addBase } from '../storybook/index'
import { redlineButtonTheme } from '../storybook/themes'
import { Layout } from '../storybook/layouts'

import { Button, ButtonGroup, Box, H2, H3, P, Pre, Code } from '../index'

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
      <Button rounding='circular'>Circular</Button>
      <H2>Custom Variant</H2>
      <H3>Flat object variant</H3>
      <P>Use the <Code>buttons</Code> variant in the theme to define a new button.</P>
      <P><Code>theme.buttons</Code> can be extended by using the <Code>extend</Code> utility method to perform a merge on the variant object.</P>
      <P>Using <Code>extend</Code> ensures that default variants are maintained, if you don’t want them then write over the <Code>variant</Code> key in your own theme.</P>
      <Pre>{`import { extend } from '@raid/ui-core'
import { theme as base } from '@raid/basic-kit'

const theme = extend(base)({
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
      <Box>
        <Button size='massive'>Size: Massive</Button>
        <Button variant='transparent'>Variant: Transparent</Button>
        <Button colour='positive'>Colour: Positive</Button>
        <Button rounding='circular'>Rounding: Circular</Button>
      </Box>
      <H2>Contextual Variant</H2>
      <P>Normal <Code>styled-system</Code> variants are unaware of instance methods, however, if you want your variants to respond to instance props then use the <Code>context</Code> helper function to do this.</P>
      <ButtonGroup space={[4, 2]}>
        <Button variant='lineout' colour='info'>Outrun</Button>
        <Button variant='lineout' colour='positive'>Outrun</Button>
      </ButtonGroup>
    </>
  )
}
