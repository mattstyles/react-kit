
import { css } from '@styled-system/css'

// Hoc to add theme-aware styling prop `sx` to a component.
export const withSx = StyledComponent => (...fns) => {
  return StyledComponent(...fns, props => css(props.sx))
}

/**
 * Applies a supplied unit to a value
 */
export const withUnit = unit => value => {
  if (typeof value === 'string') {
    if (/^-?\d+\.?\d*$/.test(value)) {
      return `${value}${unit}`
    }

    return value
  }

  return `${value}${unit}`
}
export const withMs = withUnit('ms')
