
import styled from 'styled-components'
import propTypes from 'prop-types'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import { sx } from '@raid/ui-core'

import { Box } from './box'

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
