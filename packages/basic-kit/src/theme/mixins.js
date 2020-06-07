
import { css } from '@styled-system/css'

/**
 * Mixins are used as styling functions.
 */

export const fit = css({
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0
})

export const fill = css({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%'
})

export const pixellate = css`
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -webkit-crisp-edges;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: pixelated;
`

export const circular = {
  borderRadius: '2000px'
}

export const focusStyling = css({
  outline: 'none',
  boxShadow: 'focusRing',
  zIndex: 1
})

export const focus = css({
  '&:focus': {
    outline: 'none',
    boxShadow: 'focusRing',
    zIndex: 1
  }
})

export const disabled = css({
  '&:disabled': {
    color: 'background.500',
    cursor: 'not-allowed',
    boxShadow: 'none'
  }
})

export const depth = props => css({
  boxShadow: props.depth || 0,
  zIndex: props.depth || 0
})

export const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
