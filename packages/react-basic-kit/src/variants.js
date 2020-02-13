
import { tokens } from './theme/tokens'
import { context } from './theme/context'

export const rounding = context({
  prop: 'rounding',
  scale: 'variants.rounding',
  variants: {
    square: {
      borderRadius: 0
    },
    rounded: {
      borderRadius: tokens.layout.rounding
    },
    circle: {
      borderRadius: 'circular'
    }
  }
})
