
import { darkAlpha, gray } from './colours'

const scale = [
  0, 1, 2, 4, 6, 8, 16, 24, 32
]

export const borders = {
  control: `2px solid ${gray[500]}`,
  lightAlpha: `1px solid ${darkAlpha[300]}`,
  light: {
    100: `1px solid ${gray[200]}`,
    200: `1px solid ${gray[300]}`
  }
}

export const radii = {
  ...scale,
  circular: '2000px'
}

export const borderWidths = {
  ...scale
}
