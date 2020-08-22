
import { pxToRem } from './utils'

const scale = [
  0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 60, 72, 84, 128, 256
]

export const space = { ...pxToRem(scale) }
space[0] = 0

export const sizes = {
  ...space,
  full: '100%',
  fit: '100%',
  s: space[2],
  m: space[4],
  l: space[7]
}
