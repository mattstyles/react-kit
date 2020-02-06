
import { pxToRem } from './utils'
import { blue, darkAlpha } from './colours'

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
  light: `1px solid ${darkAlpha[300]}`
}

export const shadows = {
  ...[
    '0px 0px transparent',
    `0 1px 2px 0 ${darkAlpha[200]}, 0 2px 3px -1px ${darkAlpha[200]}`,
    `0 2px 4px 0px ${darkAlpha[200]}, 0 4px 6px -1px ${darkAlpha[200]}, 0 12px 16px 0px ${darkAlpha[100]}`,
    `0 4px 8px -1px ${darkAlpha[200]}, 0 12px 20px 0px ${darkAlpha[200]}`,
    `0 8px 12px -1px ${darkAlpha[200]}, 0 16px 24px -1px ${darkAlpha[100]}, 0 20px 28px 0px ${darkAlpha[100]}`,
    `0 16px 24px -1px ${darkAlpha[200]}, 0 20px 28px 0px ${darkAlpha[100]}`
  ],
  textOnLight: `0 1px ${darkAlpha[300]}`,
  focusRing: `${blue[400]} 0px 0px 0px 0.1875rem`,
  insetControl: `inset 0px 1px 2px 1px ${darkAlpha[100]}, 0px 0px transparent`
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
