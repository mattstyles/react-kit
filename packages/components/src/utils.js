
import { css } from '@styled-system/css'

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
