
import { tokens } from '../theme/tokens'
import { context } from '../theme/context'
import { backgroundColour } from './common'

const inputs = {
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
    '&:disabled': {
      bg: 'transparent',
      '&:hover': {
        bg: 'transparent'
      }
    }
  },
  quiet: {
    bg: 'transparent',
    border: 'none',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'dark.300'
  },
  ghost: {
    bg: 'transparent',
    border: 'none'
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.inputs',
  variants: inputs
})
