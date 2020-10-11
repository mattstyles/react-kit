
import { themeGet } from '@styled-system/theme-get'
import { context } from '@raid-ui/core'

const inputs = {
  standard: props => ({
    bg: 'white',
    color: themeGet('tokens.type.body.main')(props),
    border: 'base.300',
    '&:disabled': {
      bg: 'background.200',
      borderColor: 'transparent',
      color: themeGet('tokens.type.body.muted')(props),
      '&:hover': {
        bg: 'background.200'
      }
    }
  }),
  ghost: {
    bg: 'transparent',
    border: 'none'
  },
  tight: props => ({
    py: 1,
    bg: 'white',
    color: themeGet('tokens.type.body.main')(props),
    border: 'base.300'
  })
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.inputs',
  variants: inputs
})
