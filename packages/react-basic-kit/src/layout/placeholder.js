
import styled, { css } from 'styled-components'
import { sx } from 'react-kit-core'
import { themeGet } from '@styled-system/theme-get'

import { pulse } from '../theme/animations'
import { Box } from './box'

const pulsing = css`
  animation: ${pulse} 8s ease-in-out infinite;
`

export const Placeholder = styled(Box)(
  props => ({
    backgroundImage: `linear-gradient(270deg, ${themeGet('colors.' + props.color1, props.color1)(props)}, ${themeGet('colors.' + props.color2, props.color2)(props)}, ${themeGet('colors.' + props.color2, props.color2)(props)}, ${themeGet('colors.' + props.color1, props.color1)(props)})`,
    backgroundSize: '400% 100%'
  }),
  // @TODO note that animations *must* be specified last on the keyframe ref won't be injected correctly. Check SC repo for updates.
  pulsing,
  sx
)
Placeholder.defaultProps = {
  color1: 'gray.75',
  color2: 'gray.200'
}
