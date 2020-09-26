
import { variant } from 'styled-system'

export const variants = variant({
  props: 'variant',
  scale: 'variants.tooltips',
  variants: {
    flat: {
      bg: 'white',
      border: 'light.100',
      boxShadow: 0
    },
    small: {
      fontSize: ['s', 's'],
      lineHeight: ['s', 's'],
      px: 2,
      py: 0
    },
    dark: {
      bg: 'background.800',
      color: 'background.75'
    }
  }
})
