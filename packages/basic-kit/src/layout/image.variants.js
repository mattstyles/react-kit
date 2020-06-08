
import { context } from '@raid/ui-core'

const images = {
  fill: {
    width: 'full',
    height: 'full'
  },
  avatar: {
    width: 8,
    height: 8,
    borderRadius: 'circular'
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.images',
  variants: images
})
