
import { action } from '@storybook/addon-actions'

import { Button } from './button'

export default {
  title: 'Usage|Controls/Button'
}

export const Usage = () => {
  return (
    <>
      <h2>Custom Variant</h2>
      <p>Use the <code>buttons</code> variant in the theme to define a new button.</p>
      <p><code>theme.buttons</code> can be extended by spreading existing values or using a <code>deepMerge</code> function.</p>
      <p>The theme default button variants can be imported from the library so that if you want to preserve those variants then you can.</p>
      <pre>{`
buttons: {
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
}
      `}
      </pre>
      <Button
        display='block'
        m={2}
        variant='redline'
        onClick={action('outrun')}
      >
        Coloured outline
      </Button>
    </>
  )
}
