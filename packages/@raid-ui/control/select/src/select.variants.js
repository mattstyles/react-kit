
import { themeGet } from '@styled-system/theme-get'
import { context } from '@raid-ui/core'

const selects = {
  standard: props => ({
    bg: 'white',
    border: 'control',
    borderRadius: themeGet('tokens.layout.rounding')(props),
    color: themeGet('tokens.type.body.main')(props),
    '&.disabled': {
      bg: 'background.200',
      cursor: 'not-allowed',
      color: 'background.500',
      borderColor: 'transparent'
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
      bg: 'background.200',
      cursor: 'not-allowed',
      color: 'background.500',
      borderColor: 'transparent'
    },
    '.select': {
      borderRadius: themeGet('tokens.layout.rounding')(props),
      py: 1,
      lineHeight: 2,
      color: themeGet('tokens.type.body.main')(props)
    }
  })
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.selects',
  variants: selects
})
