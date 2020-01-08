
import palx from 'palx'

const baseColor = '#40fdfd'
const pal = palx(baseColor)

const grays = [
  '#f9fafa',
  '#e9eced',
  '#d2d8da',
  '#96a4a9',
  '#6b7f86',
  '#203f49',
  '#1c3841',
  '#183037',
  '#13262c',
  '#0c191d'
]

export const palette = {
  ...pal,
  background: grays,
  white: 'hsl(240, 5%, 99%)'
}

export const gradient = {
  dusk: `linear-gradient(30deg, ${pal.violet[5]}, ${pal.blue[6]})`,
  sunset: `linear-gradient(30deg, ${pal.orange[3]}, ${pal.red[7]} 75%)`
}
