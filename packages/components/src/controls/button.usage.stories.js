
import { action } from '@storybook/addon-actions'

import { addBase } from '../storybook/index'
import { redlineButtonTheme } from '../storybook/themes'

import { Button, H2, P, Pre, Code } from '../index'

export default {
  title: 'Usage/Controls/Button',
  decorators: [addBase({
    theme: redlineButtonTheme
  })]
}

export const CustomVariant = () => {
  return (
    <>
      <H2>Custom Variant</H2>
      <P>Use the <Code>buttons</Code> variant in the theme to define a new button.</P>
      <P><Code>theme.buttons</Code> can be extended by spreading existing values or using a <Code>deepMerge</Code> function.</P>
      <P>The theme default button variants can be imported from the library so that if you want to preserve those variants then you can.</P>
      <Pre>{`import { theme as core, variants } from 'react-basic-kit'

buttons: {
  ...core.buttons || {},
  ...variants.buttons.buttons,
  redline: {
    bg: 'transparent',
    color: 'red.500',
    borderColor: 'red.500',
    '&:hover': {
      bg: 'red.500',
      color: tokens.type.body.light
    },
    '&:active': {
      bg: 'red.600'
    }
  }
}`}
      </Pre>
      <Button
        display='block'
        my={2}
        variant='redline'
        onClick={action('redline variant')}
      >
        Coloured outline
      </Button>
    </>
  )
}
