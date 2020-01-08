
import PropTypes from 'prop-types'
import {
  space, border, layout,
  color, background, position,
  flexbox, compose
} from 'styled-system'
import styled, { css } from 'styled-components'

export const Box = styled('div')(
  compose(
    space,
    color,
    background,
    layout,
    border,
    position
  )
)

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  ${flexbox}
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

export const Column = styled(Box)`
  display: flex;
  flex-direction: column;
`

export const Row = styled(Box)`
  display: flex;
  flex-direction: row;
`
