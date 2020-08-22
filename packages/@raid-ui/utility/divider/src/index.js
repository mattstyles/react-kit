
import styled from 'styled-components'
import propTypes from 'prop-types'
import { compose, border, space } from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { sx } from '@raid-ui/core'
import { Spacer } from '@raid-ui/align'

/**
 * Visually displays a dividing line between elements.
 * Uses margin to centralise the border line so be aware of collapsing margins.
 */
export const Divider = styled(Spacer)(
  props => css({
    border: 'none',
    height: 'auto'
  }),
  props => {
    // Defaulting can't be done statically as it needs to pull a default value
    // from the theme if not supplied
    const space = typeof props.space === 'undefined'
      ? themeGet('tokens.layout.padding')(props)
      : props.space

    return props.isVertical
      ? css({
        borderLeftWidth: 1,
        borderLeftStyle: 'solid',
        borderColor: 'dark.200',
        mx: space,
        my: 0
      })
      : css({
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderColor: 'dark.200',
        my: space,
        mx: 0
      })
  },
  compose(
    border,
    space
  ),
  sx
)
Divider.propTypes = {
  ...Spacer.propTypes,
  ...systemTypes.border,
  ...systemTypes.space,
  isVertical: propTypes.bool,
  space: propTypes.oneOfType([
    propTypes.number,
    propTypes.string
  ])
}
Divider.defaultProps = {
  isVertical: false,
  // Necessary to apply theme default
  space: undefined
}
Divider.displayName = 'EndAllDivisions'
