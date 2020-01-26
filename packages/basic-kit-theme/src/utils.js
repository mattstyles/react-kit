
import { compose, map } from 'ramda'

const toRem = _ => `${_}rem`
const toBase16 = _ => _ / 16

export const pxToRem = compose(
  map(toRem),
  map(toBase16)
)
