
import styled from 'styled-components'
import propTypes from 'prop-types'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import { sx } from '@raid/ui-core'

import { Box } from './box'

/**
 * A view is the standard container for an app and will typically be assigned
 * to semantic elements such as Main and Aside.
 */
export const View = styled(Box)(
  props => props.isFlex && {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  props => css({
    px: props.isPadded && themeGet('tokens.layout.padding')(props)
  }),
  sx
)
View.propTypes = {
  ...Box.propTypes,
  isFlex: propTypes.bool,
  isPadded: propTypes.bool
}
View.defaultProps = {
  isFlex: false,
  isPadded: false
}
