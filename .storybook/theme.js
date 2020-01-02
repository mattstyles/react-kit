
import palx from 'palx'

import { theme as themeCore } from '../src'

const baseColor = '#40fdfd'
const pal = palx(baseColor)

const palette = {
  ...pal,
  background: themeCore.colors.background,
  white: 'hsl(240, 4%, 99%)'
}

const gradient = {
  background: `radial-gradient(
    circle at 50% 90%,
    rgba(0, 0, 0, 0.05) 0,
    rgba(0, 0, 0, 0.3) 60%,
    rgba(0, 0, 0, 0.4) 100%
  )`,
  backgroundSubtle: `radial-gradient(
    circle at 50% 90%,
    rgba(0, 0, 0, 0.01) 0,
    rgba(0, 0, 0, 0.1) 60%,
    rgba(0, 0, 0, 0.15) 100%
  )`,
  primaryRadial: `radial-gradient(
    circle at 50% 90%,
    ${pal.teal[5]} 0,
    ${pal.teal[7]} 60%,
    ${pal.teal[8]} 100%
  )`,
  primary: `linear-gradient(30deg, ${pal.teal[8]}, ${pal.teal[4]})`,
  primaryShift: `linear-gradient(30deg, ${pal.teal[5]}, ${pal.green[4]})`,
  primaryLight: `linear-gradient(30deg, ${pal.lime[3]}, ${pal.green[7]})`,
  primaryDark: `linear-gradient(30deg, ${pal.lime[7]}, ${pal.green[8]})`,
  dusk: `linear-gradient(30deg, ${pal.violet[5]}, ${pal.blue[6]})`,
  sunset: `linear-gradient(30deg, ${pal.orange[3]}, ${pal.red[7]} 75%)`
}

export const theme = {
  ...themeCore,
  palette,
  gradient
}
