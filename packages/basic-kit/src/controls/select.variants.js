
import { tokens } from '../theme/tokens'
import { context } from '../theme/context'
import { backgroundColour } from './common'

const selects = {
  standard: {
    borderRadius: tokens.layout.rounding,
    boxShadow: 'insetControl',
    background: backgroundColour,
    color: tokens.type.body.dark,
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    },
    '.select': {
      borderRadius: tokens.layout.rounding
    }
  },
  flat: {
    bg: 'white',
    border: 'control',
    borderRadius: tokens.layout.rounding,
    color: tokens.type.body.dark,
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    },
    '.select': {
      borderRadius: tokens.layout.rounding
    }
  },
  tight: {
    bg: 'white',
    border: 'control',
    borderRadius: tokens.layout.rounding,
    color: tokens.type.body.dark,
    '&.disabled': {
      bg: 'dark.100',
      cursor: 'not-allowed'
    },
    '.select': {
      borderRadius: tokens.layout.rounding,
      py: 1,
      lineHeight: 2,
      color: tokens.type.body.dark
    },
    i: {
      right: 1
    }
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.selects',
  variants: selects
})
