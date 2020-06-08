
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
 * @see basic-kit Button -> where button type can be affected by specified color
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
 * Variant can be used two ways within base components.
 * A key can be specified, such as variant('type'), whereby any extended
 * component can using __variant('h1') to pull the `h1` styling from the
 * theme into the component, or null can be specified and the variant should
 * supply the entire theme path.
 * @see basic-kit Text and text.stories for an example.
 */
export const variant = key => props => {
  if (!props || !props.__variant) {
    return null
  }

  const path = key ? `${key}.${props.__variant}` : props.__variant

  if (!props.__variant || !key) {
    return null
  }

  const themedKey = themeGet(path)(props)

  // If the theme value associated with the key is a function then invoke it
  if (typeof themedKey === 'function') {
    return css({
      ...themedKey(props)
    })
  }

  // Otherwise it'll be an object so pipe it through `css` and return
  return css({
    ...themedKey
  })
}

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

/**
 * Map and mapping functions to help with massaging theme values, mostly due to
 * the complexity that each value _could_ be an array of values (denoting
 * breakpoints).
 * Having array-like scales mean that incrementing and decrementing the value
 * used is a powerful construct i.e. we should not concern ourselves with
 * absolute values, instead we want to (e.g.) increase padding by 1 or 2 units,
 * we don't care if that is 5, 8, or 10 pixels, just that it is a little
 * larger than the relative padding.
 * These functions enable the above thinking to thrive.
 */

// Useful for mapping over theme values that could be array-form for breakpoints
export const map = fn => _ => {
  if (Array.isArray(_)) {
    return _.map(fn)
  }

  return fn(_)
}
export const apply = v => _ => _ + v
