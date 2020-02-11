
import { tokens } from '../theme/tokens'
import { context } from '../theme/context'
import { backgroundColour } from './common'

const selects = {
  standard: {
    borderRadius: tokens.layout.rounding,
    boxShadow: 'insetControl',
    background: backgroundColour,
    color: tokens.type.body.dark,
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    }
  },
  flat: {
    bg: 'white',
    border: 'light',
    borderRadius: tokens.layout.rounding,
    color: tokens.type.body.dark,
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    }
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.selects',
  variants: selects
})
