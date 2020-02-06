
import { tokens } from '../theme/tokens'
import { context } from '../theme/context'

const inputs = {
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
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.inputs',
  variants: inputs
})
