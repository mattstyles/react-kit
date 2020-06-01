
import propTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { sx } from '@raid/ui-core'
import { themeGet } from '@styled-system/theme-get'

import { pulse } from '../theme/animations'
import { Box } from '../layout/box'

export const Placeholder = styled(Box)(
  props => ({
    backgroundImage: `linear-gradient(270deg, ${themeGet('colors.' + props.color1, props.color1)(props)}, ${themeGet('colors.' + props.color2, props.color2)(props)}, ${themeGet('colors.' + props.color2, props.color2)(props)}, ${themeGet('colors.' + props.color1, props.color1)(props)})`,
    backgroundSize: '400% 100%'
  }),
  // @TODO add variants, but how to customise the gradient to use theme colours from the variant?
  // @TODO note that animations *must* be specified last on the keyframe ref won't be injected correctly. Check SC repo for updates.
  props => css`
    animation: ${pulse} ${props.duration} ease-in-out infinite;
  `,
  sx
)
Placeholder.defaultProps = {
  color1: 'background.75',
  color2: 'background.200',
  duration: '8000ms'
}
Placeholder.propTypes = {
  color1: propTypes.string,
  color2: propTypes.string,
  duration: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ])
}
