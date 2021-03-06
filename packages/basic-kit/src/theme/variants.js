
import { themeGet } from '@styled-system/theme-get'
import { context } from '@raid/ui-core'

export const rounding = context({
  prop: 'rounding',
  scale: 'variants.rounding',
  variants: {
    square: {
      borderRadius: 0
    },
    rounded: props => ({
      borderRadius: themeGet('tokens.layout.rounding')(props)
    }),
    circular: {
      borderRadius: 'circular'
    }
  }
})
