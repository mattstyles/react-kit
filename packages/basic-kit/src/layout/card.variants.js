
import { tokens } from '../theme/tokens'
import { context } from '../theme/context'

const cards = {
  standard: {
    bg: 'white',
    border: 'light',
    borderRadius: tokens.layout.rounding,
    color: tokens.type.body.dark
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.cards',
  variants: cards
})
