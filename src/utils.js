
export const clamp = (min, max) => val => val < min
  ? min
  : val > max
    ? max
    : val

export const clampPerc = clamp(0, 1)
