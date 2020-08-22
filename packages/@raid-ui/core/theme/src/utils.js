
const mapper = value => `${value / 16}rem`
export const pxToRem = arr => arr.map(mapper)
