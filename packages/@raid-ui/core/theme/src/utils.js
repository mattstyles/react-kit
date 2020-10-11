
const mapper = value => `${value / 16}rem`
export const pxToRem = arr => arr.map(mapper)

export const mapObject = (obj, fn) => {
  const output = {}
  for (const key in obj) {
    output[key] = fn(obj[key])
  }
  return output
}
