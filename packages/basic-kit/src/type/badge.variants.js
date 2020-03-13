
import { tokens } from '../theme/tokens'
import { context } from '../theme/context'

const badges = {
  standard: {
    bg: 'gray.200',
    color: tokens.type.body.dark
  },
  primary: {
    bg: 'primary',
    color: 'white',
    fontWeight: 400,
    letterSpacing: 'normal',
    fontSize: tokens.type.baseSize
  },
  circular: {
    borderRadius: 'circular',
    fontWeight: 400,
    letterSpacing: 'normal',
    fontSize: tokens.type.baseSize,
    px: 1,
    py: 0,
    height: 5,
    minWidth: 5,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  outline: {
    boxShadow: 'inset 0 0 0 1px',
    bg: 'transparent'
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.badges',
  variants: badges
})
