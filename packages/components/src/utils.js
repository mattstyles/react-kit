
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

// Hoc to add theme-aware styling prop `sx` to a component.
export const withSx = StyledComponent => (...fns) => {
  return StyledComponent(...fns, props => css(props.sx))
}

// Helpers for extending components
export const base = props => css(props.__css)
export const sx = props => css(props.sx)
export const hover = props => css({ '&:hover': props.__hover })
export const focus = props => css({ '&:focus': props.__focus })
export const active = props => css({ '&:active': props.__active })

/**
 * Variant can be used two ways within base components.
 * A key can be specified, such as variant('type'), whereby any extended
 * component can using __variant('h1') to pull the `h1` styling from the
 * theme into the component.
 */
export const variant = key => props => {
  if (!props) {
    return null
  }

  const path = key ? `${key}.${props.__variant}` : props.__variant

  if (!props.__variant || !key) {
    return null
  }

  return css({
    ...themeGet(path)(props)
  })
}
