
import { themeGet } from '@styled-system/theme-get'
import merge from 'deepmerge'

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
export function extend (...args) {
  return merge.all([
    core,
    ...args
  ])
}

/**
 * Applies a supplied unit to a value
 */
export const withUnit = unit => value => {
  if (typeof value === 'string') {
    if (/$.[0-9]/.test(value)) {
      return `${value}${unit}`
    }

    return value
  }

  return `${value}${unit}`
}
export const withMs = withUnit('ms')
