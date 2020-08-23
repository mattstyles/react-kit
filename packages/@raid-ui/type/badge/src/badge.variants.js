
import { themeGet } from '@styled-system/theme-get'
import { context } from '@raid-ui/core'

const badges = {
  standard: props => ({
    bg: 'background.200',
    color: themeGet('tokens.type.body.dark')(props)
  }),
  primary: props => ({
    bg: 'primary',
    color: 'white',
    fontWeight: 400,
    letterSpacing: 'normal',
    fontSize: themeGet('tokens.type.baseSize')(props)
  }),
  circular: props => ({
    borderRadius: 'circular',
    fontWeight: 400,
    letterSpacing: 'normal',
    fontSize: themeGet('tokens.type.baseSize')(props),
    px: 1,
    py: 0,
    height: 5,
    minWidth: 5,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
  }),
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
