
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { sx } from '@raid/ui-core'

import { common } from '../system/props'

// @TODO make this group collapse properly at breakpoints
// Stack differs to a button group, the button group rounds corners
export const ButtonGroup = styled('div').attrs(props => {
  // Set defaults here to have access to the theme
  return {
    condensed: props.condensed,
    ix: props.ix || themeGet('tokens.layout.padding')(props),
    iy: props.iy || 0,
    rounding: props.rounding || themeGet('tokens.layout.rounding')(props)
  }
})(
  props => css({
    display: 'inline-block',
    '> *': {
      mr: props.condensed ? 0 : props.ix,
      mb: props.iy
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
  sx
)
ButtonGroup.propTypes = {
  condensed: propTypes.bool,
  ix: propTypes.number,
  iy: propTypes.number,
  rounding: propTypes.oneOfType([
    propTypes.number,
    propTypes.string
  ]),
  ...common.propTypes
}
