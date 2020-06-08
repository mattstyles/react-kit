
import { themeGet } from '@styled-system/theme-get'
import { context } from '@raid/ui-core'

const selects = {
  standard: props => ({
    borderRadius: themeGet('tokens.layout.rounding')(props),
    boxShadow: 'insetControl',
    bg: 'dark.100',
    color: themeGet('tokens.type.body.main')(props),
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    },
    '.select': {
      borderRadius: themeGet('tokens.layout.rounding')(props)
    }
  }),
  flat: props => ({
    bg: 'white',
    border: 'control',
    borderRadius: themeGet('tokens.layout.rounding')(props),
    color: themeGet('tokens.type.body.main')(props),
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    },
    '.select': {
      borderRadius: themeGet('tokens.layout.rounding')(props)
    }
  }),
  tight: props => ({
    bg: 'white',
    border: 'control',
    borderRadius: themeGet('tokens.layout.rounding')(props),
    color: themeGet('tokens.type.body.main')(props),
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    },
    '.select': {
      borderRadius: themeGet('tokens.layout.rounding')(props),
      py: 1,
      lineHeight: 2,
      color: themeGet('tokens.type.body.main')(props)
    },
    i: {
      right: 1
    }
  })
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.selects',
  variants: selects
})
