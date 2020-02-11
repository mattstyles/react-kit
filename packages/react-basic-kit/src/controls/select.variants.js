
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
    },
    '.select': {
      px: tokens.layout.padding,
      py: tokens.layout.padding - 2
    }
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.selects',
  variants: selects
})
