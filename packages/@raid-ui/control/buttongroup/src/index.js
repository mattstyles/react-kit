
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

import { sx } from '@raid-ui/core'
import { Stack } from '@raid-ui/stack'

export const ButtonGroup = styled(Stack).attrs(props => {
  // Setting defaults here to have defaults from the theme
  return {
    rounding: props.rounding || themeGet('tokens.layout.rounding')(props)
  }
})(
  props => ({
    display: 'inline-grid',
    alignItems: 'center'
  }),
  props => props.space === 0 && css({
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
  sx
)
ButtonGroup.defaultProps = {
  row: true,
  tight: true,
  space: 2
}
ButtonGroup.propTypes = {
  rounding: propTypes.oneOfType([
    propTypes.number,
    propTypes.string
  ]),
  ...Stack.propTypes
}
