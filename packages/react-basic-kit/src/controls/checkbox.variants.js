
import { tokens } from '../theme/tokens'
import { context } from '../theme/context'
import { backgroundColour } from './common'

const checkboxes = {
  standard: {
    bg: backgroundColour,
    border: 'none',
    boxShadow: 'insetControl',
    color: tokens.type.body.dark,
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    },
    '> input': {
      bg: 'rebeccapurple'
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
  scale: 'variants.inputs',
  variants: checkboxes
})
