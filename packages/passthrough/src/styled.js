
/**
 * Going to try and solve the problem with a custom styled function and
 * an extend function on the component prototype.
 * Problem is how to extend a component with styled(Base) and retain correct
 * specificity for <Extended sx={{...}}>
 */

import styled from 'styled-components'
import { compose, space, color, layout } from 'styled-system'
import { css } from '@styled-system/css'

const myStyledFunc = element => {
  return (...styles) => {
    const Component = styled(element)(
      ...styles,
      props => css(props.sx)
    )
    Component.styles = styles
    return Component
  }
}

export const Base = myStyledFunc('div')(
  // styled funcs i.e a styling api for component
  compose(
    color,
    space
  ),

  // custom styling for component
  css({
    m: 2,
    p: 2,
    color: 'white'
  })
)

export const Extended = myStyledFunc('div')(
  Base.styles,
  // custom style api for new component
  layout,

  // custom styling for component
  css({
    bg: 'rebeccapurple'
  })
)
