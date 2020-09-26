
import { variant } from '@styled-system/variant'

export const variants = variant({
  prop: 'variant',
  scale: 'variants.headers',
  variants: {
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 'header'
    },
    fixed: {
      position: 'fixed',
      top: 0,
      width: 'full',
      zIndex: 'header'
    }
  }
})
