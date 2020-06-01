
import styled from 'styled-components'
import propTypes from 'prop-types'
import { sx } from '@raid/ui-core'

import { Box } from './box'

export const Pane = styled(Box)(
  props => ({
    display: 'flex',
    flexDirection: props.split ? 'row' : 'column',
    flex: props.flex
  }),
  sx
)
Pane.defaultProps = {
  split: false,
  flex: 1
}
Pane.propTypes = {
  split: propTypes.bool,
  flex: propTypes.oneOfType([
    propTypes.number,
    propTypes.string
  ]),
  ...Box.propTypes
}
