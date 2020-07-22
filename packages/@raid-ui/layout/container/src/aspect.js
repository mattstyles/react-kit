
import styled from 'styled-components'
import propTypes from 'prop-types'
import { css } from '@styled-system/css'
import { sx, fill } from '@raid-ui/core'

import { Box } from './box'

/**
 * Uses the padding hack to size an element based on an aspect ratio.
 * Default ratio is 1:1 (square).
 * Replace with `aspect-ratio` css when widely available.
 */
export const Aspect = styled(Box)(
  props => css({
    position: 'relative',
    '&::before': {
      display: 'block',
      height: 0,
      content: '" "',
      pb: `${(1 / props.ratio) * 100}%`
    },
    '&& > *': {
      ...fill()
    }
  }),
  sx
)
Aspect.defaultProps = {
  ...Box.defaultProps,
  ratio: 1
}
Aspect.propTypes = {
  ratio: propTypes.number,
  children: propTypes.element.isRequired
}
Aspect.displayName = 'ItsAllAboutPerspective'
