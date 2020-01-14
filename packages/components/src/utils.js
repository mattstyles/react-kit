
import { themeGet } from '@styled-system/theme-get'

export const clamp = (min, max) => val => val < min
  ? min
  : val > max
    ? max
    : val
export const clampPerc = clamp(0, 1)

export const noop = () => {}
export const errLog = err => console.error(err)

export const getTransition = (prop, time, ease = 'ease-out', delay = 0) => {
  return props => `${prop} ${themeGet(time)(props)}ms ${ease} ${delay}ms`
}
