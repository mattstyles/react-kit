
import { themeGet } from '@styled-system/theme-get'
import merge from 'lodash.merge'

import { theme as core } from './theme'

const toFixed = v => Number(v).toFixed(2)

// Assumes theme prop is a number and ensures it is fixed to 2dp
export const modTheme = (key, mod) => props => {
  const v = themeGet(key)(props)
  return v
    ? toFixed(v * mod)
    : mod
}

export const getTransition = (prop, time = 'main', ease = 'ease-out', delay = 0) => {
  return theme => {
    const duration = themeGet('transition.' + time)({ theme }) || time
    return `${prop} ${duration}ms ${ease} ${delay}ms`
  }
}

/**
 * Extend takes an object full of variants, and merges it in with
 * the existing variants.
 */
export const extend = theme => {
  // @TODO something special for variants as they are functions? how?
  return merge(
    {},
    core,
    theme
  )
}
