
import { themeGet } from '@styled-system/theme-get'

import { context } from '../theme/context'

const cards = {
  standard: props => ({
    bg: 'white',
    border: 'light',
    borderRadius: themeGet('tokens.layout.rounding')(props),
    color: themeGet('tokens.type.body.main')(props)
  })
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.cards',
  variants: cards
})
