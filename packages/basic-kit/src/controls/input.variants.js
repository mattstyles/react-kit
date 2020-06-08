
import { themeGet } from '@styled-system/theme-get'

import { context } from '../theme/context'

const inputs = {
  standard: props => ({
    bg: 'dark.100',
    border: 'none',
    boxShadow: 'insetControl',
    color: themeGet('tokens.type.body.main')(props),
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    }
  }),
  flat: props => ({
    bg: 'white',
    color: themeGet('tokens.type.body.main')(props),
    border: 'control',
    '&:disabled': {
      bg: 'transparent',
      '&:hover': {
        bg: 'transparent'
      }
    }
  }),
  quiet: {
    bg: 'transparent',
    border: 'none',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: 'dark.300'
  },
  ghost: {
    bg: 'transparent',
    border: 'none'
  },
  tight: props => ({
    py: 1,
    bg: 'white',
    color: themeGet('tokens.type.body.main')(props),
    border: 'control'
  })
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.inputs',
  variants: inputs
})
