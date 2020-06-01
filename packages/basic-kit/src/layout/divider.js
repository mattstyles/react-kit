
import styled from 'styled-components'
import propTypes from 'prop-types'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import { sx } from '@raid/ui-core'

import { Spacer } from './spacer'

export const Divider = styled(Spacer)(
  props => css({
    border: 'none',
    height: 'auto'
  }),
  props => props.isVertical
    ? css({
      borderLeftWidth: 1,
      borderLeftStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      mx: themeGet('tokens.layout.padding')(props),
      my: 0
    })
    : css({
      borderTopWidth: 1,
      borderTopStyle: 'solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      my: themeGet('tokens.layout.padding')(props)
    }),
  styledSystem.border,
  sx
)
Divider.propTypes = {
  ...Spacer.propTypes,
  ...systemTypes.border,
  isVertical: propTypes.bool
}
Divider.defaultProps = {
  isVertical: false
}
