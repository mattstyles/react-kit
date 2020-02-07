
import { tokens } from '../theme/tokens'
import { context } from '../theme/context'
import { backgroundColour } from './common'

/**
 * Classnames are used internally to allow styling of states.
 * `.selected` controls when the checkbox is selected. Generally you do not need to set an icon colour here as it is invisible when not selected, this behaviour can not currently be controlled, although see the styled example in the story file.
 * `color` controls icon fill colour.
 * `bg` controls the background fill colour.
 * Custom variants can be added to the theme under `variants.checkboxes`
 */

const checkboxes = {
  standard: {
    bg: backgroundColour,
    border: 'none',
    boxShadow: 'insetControl',
    color: tokens.type.body.dark,
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    }
  },
  flat: {
    bg: 'white',
    color: tokens.type.body.dark,
    border: 'light',
    '&.disabled': {
      bg: 'dark.100',
      border: props => `1px solid ${props.colors.dark[100]}`,
      cursor: 'not-allowed'
    }
  },
  primary: {
    bg: 'white',
    color: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'primary',
    '&.disabled': {
      bg: 'white',
      borderColor: 'dark.300',
      cursor: 'not-allowed'
    },
    '&.selected': {
      bg: 'primary'
    }
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.checkboxes',
  variants: checkboxes
})
