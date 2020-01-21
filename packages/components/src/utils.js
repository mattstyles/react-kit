
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

export const clamp = (min, max) => val => val < min
  ? min
  : val > max
    ? max
    : val
export const clampPerc = clamp(0, 1)

export const noop = () => {}
export const errLog = err => console.error(err)

// Hoc to add theme-aware styling prop `sx` to a component.
export const withSx = StyledComponent => (...fns) => {
  return StyledComponent(...fns, props => css(props.sx))
}

// Helpers for extending components
export const base = props => css(props.__css)
export const sx = props => css(props.sx)
export const variant = key => props => {
  if (!props || !props.__variant || !key) {
    return null
  }
  return css({
    ...themeGet(`${key}.${props.__variant}`)(props)
  })
}
