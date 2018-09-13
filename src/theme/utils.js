
import { prop } from 'lodash/fp'

const toFixed = v => Number(v).toFixed(2)

export const getTheme = key => prop(`theme.${key}`)
export const getColor = key => getTheme(`color.${key}`)
export const getGradient = key => getTheme(`gradient.${key}`)

// Assumes theme prop is a number and ensures it is fixed to 2dp
export const modTheme = (key, mod) => props => {
  const v = prop(`theme.${key}`, props)
  return v
    ? toFixed(v * mod)
    : mod
}
