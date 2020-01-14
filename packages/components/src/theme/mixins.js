
import { css } from '@styled-system/css'

export const fit = css({
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0
})

export const pixellate = css`
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -webkit-crisp-edges;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: pixelated;
`

export const circular = css({
  borderRadius: '2000px'
})

export const focus = props => css({
  outline: 'none',
  boxShadow: 'focusRing',
  zIndex: 1
})
