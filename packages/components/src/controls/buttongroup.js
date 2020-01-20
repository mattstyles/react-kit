
import propTypes from 'prop-types'
import styled from 'styled-components'
// import { variant } from 'styled-system'
// import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { tokens } from '../theme/index'
import { common } from '../system/props'

// @TODO make this group collapse probably at breakpoints
export const ButtonGroup = styled('div').attrs(({
  condensed,
  spacing,
  rounding
}) => ({ condensed, spacing, rounding }))(
  props => css({
    display: 'inline-block',
    '> *': {
      mr: props.condensed ? 0 : props.spacing
    },
    '> *:last-child': {
      mr: 0
    }
  }),
  props => props.condensed && css({
    '> *': {
      borderRadius: 0,
      ':focus, :active': {
        zIndex: 1
      }
    },
    '> *:first-child': {
      borderTopLeftRadius: props.rounding,
      borderBottomLeftRadius: props.rounding
    },
    '> *:last-child': {
      borderTopRightRadius: props.rounding,
      borderBottomRightRadius: props.rounding
    }
  }),
  common,
  props => css(props.sx)
)
ButtonGroup.propTypes = {
  spacing: propTypes.number,
  rounding: propTypes.oneOfType([
    propTypes.number,
    propTypes.string
  ]),
  ...common.propTypes
}
ButtonGroup.defaultProps = {
  spacing: tokens.layout.padding,
  rounding: tokens.layout.rounding
}
