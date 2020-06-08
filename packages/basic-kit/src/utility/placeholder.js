
import propTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { sx, withMs } from '@raid/ui-core'
import { themeGet } from '@styled-system/theme-get'

import { pulse } from '../theme/animations'
import { Box } from '../layout/box'
import { variants } from './placeholder.variants'

export const Placeholder = styled(Box)(
  variants,
  // @TODO note that animations *must* be specified last on the keyframe ref won't be injected correctly. Check SC repo for updates.
  props => {
    // Apply unit if value is supplied as a number
    const duration = themeGet(`transition.${props.duration}`, props.duration)(props)
    return css`
      animation: ${pulse} ${withMs(duration)} ease-in-out infinite;
    `
  },
  sx
)
Placeholder.defaultProps = {
  color1: 'background.75',
  color2: 'background.200',
  duration: '8000ms',
  variant: 'standard'
}
Placeholder.propTypes = {
  color1: propTypes.string,
  color2: propTypes.string,
  // Duration is not a styled-prop so does not get media queries
  duration: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  variant: propTypes.string
}
