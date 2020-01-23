
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

/**
 * Creates a context-aware variant and is used to add to the theme.
 * Context-aware variants are passed the instance props to perform some
 * contextual logic to affect the styling.
 * To avoid confusion with styled-system/variant we'll call this one context.
 */
export const context = ({
  prop = '',
  scale = '',
  variants = {}
}) => {
  return props => {
    const hasProp = props[prop]

    if (!hasProp) {
      return null
    }

    const variant = themeGet(`${scale}.${hasProp}`, variants[hasProp])(props)

    if (!variant) {
      return null
    }

    if (typeof variant === 'function') {
      return css(variant(props))
    }

    if (typeof variant === 'object') {
      return css(variant)
    }

    return null
  }
}
