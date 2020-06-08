
export const clamp = (min, max) => val => val < min
  ? min
  : val > max
    ? max
    : val
export const clampPerc = clamp(0, 1)
export const randStr = () => Math.random().toString(36).slice(2)

export const noop = () => {}
export const errLog = err => console.error(err)

// Useful for mapping over theme values that could be array-form for breakpoints
export const map = _ => f => {
  if (Array.isArray(_)) {
    return _.map(f)
  }

  return f(_)
}
export const inc = v => _ => _ + v
export const dec = v => _ => _ - v
