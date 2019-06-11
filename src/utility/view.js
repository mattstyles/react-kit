
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getTheme } from '../theme/utils'

const getBasePadding = getTheme('basePadding')

export const View = styled('div')`
  display: ${props => props.flex && 'flex'};
  flex-direction: ${props => props.flex && 'column'};
  flex: 1;
  position: relative;
  overflow-y: ${props => props.yscroll ? 'scroll' : 'hidden'};
  overflow-x: ${props => props.xscroll ? 'scroll' : 'hidden'};
  padding: ${props => props.isPadded && `${getBasePadding(props)}rem`};
`
View.propTypes = {
  isPadded: PropTypes.bool,
  flex: PropTypes.bool,
  yscroll: PropTypes.bool,
  xscroll: PropTypes.bool
}
View.defaultProps = {
  isPadded: false,
  flex: false,
  yscroll: true,
  xscroll: false
}
