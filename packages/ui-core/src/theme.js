
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import merge from 'deepmerge'
import theme from '@raid/theme'

import { withMs } from './utils'

/**
 * Extend takes an object full of variants, and merges it in with
 * the existing variants.
 */
export const extend = (base = theme) => function extend (...args) {
  return merge.all([
    base,
    ...args
  ])
}

/**
 * Creates a context-aware variant and is used to add to the theme.
 * Context-aware variants are passed the instance props to perform some
 * contextual logic to affect the styling.
 * To avoid confusion with styled-system/variant we'll call this one context.
 * @see Button -> where button type can be affected by specified color
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

/**
 * @TODO variant helper
 */

/**
 * Shorthand theme getters
 * Used to create values within style declaration, not key-value pairs i.e.
 * @example
 * const Show = styled(Box)({
 *   transition: getTransition('opacity', 'main')
 * })
 */
export const getTransition = (prop, time = 'main', ease = 'ease-out', delay = 0) => {
  return theme => {
    const duration = themeGet('transition.' + time)({ theme }) || time
    return `${prop} ${withMs(duration)} ${ease} ${delay}ms`
  }
}
