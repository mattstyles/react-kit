
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, background, display, color } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export const View = styled('div')`
  display: ${props => props.flex && 'flex'};
  flex-direction: ${props => props.flex && 'column'};
  flex: 1;
  position: relative;
  overflow-y: ${props => props.yscroll ? 'scroll' : 'hidden'};
  overflow-x: ${props => props.xscroll ? 'scroll' : 'hidden'};
  padding: ${props => props.isPadded && `${themeGet('basePadding')(props)}rem`};
  ${display}
  ${space}
  ${color}
  ${background}
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
