
import { themeGet } from '@styled-system/theme-get'

const toFixed = v => Number(v).toFixed(2)

// Assumes theme prop is a number and ensures it is fixed to 2dp
export const modTheme = (key, mod) => props => {
  const v = themeGet(key)(props)
  return v
    ? toFixed(v * mod)
    : mod
}

export const getTransition = (prop, time, ease = 'ease-out', delay = 0) => {
  return theme => {
    return `${prop} ${themeGet(time)({ theme })}ms ${ease} ${delay}ms`
  }
}
