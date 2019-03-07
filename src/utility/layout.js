
import PropTypes from 'prop-types'
import { space, borders, width, height,
  minWidth, maxWidth, minHeight, maxHeight,
  color, background, display, borderRadius,
  flex, flexDirection, justifyContent } from 'styled-system'
import styled, { css } from 'styled-components'

export const Box = styled('div')`
  ${space}
  ${color}
  ${background}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${borders}
  ${borderRadius}
  ${display}
`

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  ${flex}
  ${flexDirection}
  ${justifyContent}
`

export const Pane = styled(FlexBox)`
  ${props => props.split && css`flex-direction: row;`}
`
Pane.defaultProps = {
  flex: 1
}
Pane.propTypes = {
  split: PropTypes.bool
}
