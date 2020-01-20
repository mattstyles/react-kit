
export const clamp = (min, max) => val => val < min
  ? min
  : val > max
    ? max
    : val
export const clampPerc = clamp(0, 1)

export const noop = () => {}
export const errLog = err => console.error(err)
