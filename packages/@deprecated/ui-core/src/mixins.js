
import { css } from '@styled-system/css'

/**
 * Mixins are styled functions which can be applied to component templates.
 * Some add properties to the component, others return styling only.
 * @example
 * const Container = styled(Box)(
 *   fill,
 *   sx
 * )
 */

/**
 * Prop functions.
 * These functions add properties to the components they help to create.
 */

// Applies the general purpose sx function
// With great power comes great responsiblity, use wisely...
export const sx = props => css(props.sx)

// Pseudo states
export const __hover = props => css({ '&:hover': props.__hover })
export const __focus = props => css({ '&:focus': props.__focus })
export const __active = props => css({ '&:active': props.__active })

// Depth applies the depth prop to manage both z height and shadowing together
export const depth = props => css({
  boxShadow: props.depth || 0,
  zIndex: props.depth || 0
})

/**
 * Generative.
 * These functions apply styling to the host component.
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

export const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

// 100% is finickity, particularly with non-square containers.
// Applying a huge radius has you covered though.
export const circular = {
  borderRadius: '2000px'
}

// Manually prefix with vendors, applying neighest neighbour scaling is still
// a painful process cross-browser, but this should just about do it.
export const pixellate = css`
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -webkit-crisp-edges;
  image-rendering: -moz-crisp-edges;
  image-rendering: -o-crisp-edges;
  image-rendering: pixelated;
`

const focusStyling = {
  outline: 'none',
  boxShadow: 'focusRing',
  zIndex: 1
}

// Applies styling to the elemnent, should you need it.
// Manual work to create a focus state is the usual use-case (i.e. not relying on the pseudo state to cover the component)
export const focusStyle = css(focusStyling)

// Focus applies styling to the focus pseudo state
export const focus = css({
  '&:focus': focusStyling
})

// Applies styling to the disabled pseudo state
export const disabled = css({
  '&:disabled': {
    color: 'background.500',
    cursor: 'not-allowed',
    boxShadow: 'none'
  }
})
