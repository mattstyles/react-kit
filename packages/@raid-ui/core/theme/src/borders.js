
import { mapObject } from './utils'
import { lightAlpha, darkAlpha, gray } from './colours'

const scale = [
  0, 1, 2, 4, 6, 8, 16, 24, 32
]

const baseBorderSize = '2px'

const makeBorder = colour => `${baseBorderSize} solid ${colour}`

export const borders = {
  lighten: mapObject(lightAlpha, makeBorder),
  darken: mapObject(darkAlpha, makeBorder),
  base: mapObject(gray, makeBorder)
}

export const radii = {
  ...scale,
  circular: '2000px'
}

export const borderWidths = {
  ...scale
}
