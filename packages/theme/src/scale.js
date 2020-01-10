
import { pxToRem } from './utils'
import { blue } from './colours'

/**
 * Base scales
 */
export const scale4 = [
  0, 4, 8, 16, 32, 64, 128, 256
]

export const fibonacci = [
  0, 1, 2, 3, 5, 8, 13, 21, 35
]

export const linear10 = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90
]

export const adaptedScale4 = [
  0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 72, 84
]

/**
 * Size scales
 */
export const space = { ...pxToRem(adaptedScale4) }
space[0] = 0

export const sizes = {
  ...space,
  full: '100%',
  fit: '100%',
  s: space[2],
  m: space[4],
  l: space[7]
}


/**
 * Layout scales
 */

export const borders = {
  light: '1px solid rgba(0, 0, 0, 0.2)'
}

export const shadows = {
  textOnLight: '0 1px rgba(0, 0, 0, 0.2)',
  focusRing: `${blue[400]} 0px 0px 0px 0.125rem`
}

export const transitions = {
  main: 150,
  spin: 1250
}

export const breaks = [
  '40em',
  '52em',
  '64em'
]
