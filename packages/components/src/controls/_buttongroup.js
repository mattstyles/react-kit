import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  TransparentButton
} from './button'

export const GroupButton = styled(TransparentButton)
`
  flex: 1;
  border-radius: 0;
  padding: 0;
`

export const ButtonGroup = styled('div')
`
  display: flex;
  flex: 1;
  flex-direction: row;
  border-radius: ${props => props.isRounded && props.theme.borderRadius + 'px'};
  overflow: hidden;
`
ButtonGroup.defaultProps = {
  isRounded: false
}
ButtonGroup.propTypes = {
  isRounded: PropTypes.bool
}