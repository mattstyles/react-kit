
import { action } from '@storybook/addon-actions'

import { Button } from './button'
import { H2, P, Pre, Code } from '../type/type'

export default {
  title: 'Usage|Controls/Button'
}

export const Usage = () => {
  return (
    <>
      <H2>Custom Variant</H2>
      <P>Use the <Code>buttons</Code> variant in the theme to define a new button.</P>
      <P><Code>theme.buttons</Code> can be extended by spreading existing values or using a <Code>deepMerge</Code> function.</P>
      <P>The theme default button variants can be imported from the library so that if you want to preserve those variants then you can.</P>
      <Pre>{`buttons: {
  ...basicTheme.buttons || {},
  ...variants.buttons,
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
        m={2}
        variant='redline'
        onClick={action('redline variant')}
      >
        Coloured outline
      </Button>
    </>
  )
}
