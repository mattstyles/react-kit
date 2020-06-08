
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

export const clamp = (min, max) => val => val < min
  ? min
  : val > max
    ? max
    : val
export const clampPerc = clamp(0, 1)
export const randStr = () => Math.random().toString(36).slice(2)

export const noop = () => {}
export const errLog = err => console.error(err)

// Useful for mapping over theme values that could be array-form for breakpoints
export const map = _ => f => {
  if (Array.isArray(_)) {
    return _.map(f)
  }

  return f(_)
}
export const inc = v => _ => _ + v
export const dec = v => _ => _ - v

/**
 * Variant can be used two ways within base components.
 * A key can be specified, such as variant('type'), whereby any extended
 * component can using __variant('h1') to pull the `h1` styling from the
 * theme into the component, or null can be specified and the variant should
 * supply the entire theme path.
 * @see Text and text.stories for an example.
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
