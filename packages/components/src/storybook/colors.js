
import palx from 'palx'

import { theme } from '../theme'

const baseColor = '#40fdfd'
const pal = palx(baseColor)

export const palette = {
  ...pal,
  background: theme.colors.background,
  white: 'hsl(240, 5%, 99%)'
}

export const gradient = {
  dusk: `linear-gradient(30deg, ${pal.violet[5]}, ${pal.blue[6]})`,
  sunset: `linear-gradient(30deg, ${pal.orange[3]}, ${pal.red[7]} 75%)`
}
