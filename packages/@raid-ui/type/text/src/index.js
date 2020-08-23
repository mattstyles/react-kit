
import styled from 'styled-components'
import propTypes from 'prop-types'
import { css } from '@styled-system/css'
import { sx, __hover, __focus, __active, variant } from '@raid-ui/core'

import { typography, common, withMedia } from '@raid-ui/system'

/**
 * defualt theme to px.
 * scale:          [   0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10 ]
 * fontSizes:      [  11,  12,  14,  16,  19,  21,  26,  32,  40,  58,  72 ]
 * lineHeights:    [   4,   8,  12,  16,  20,  24,  32,  36,  40,  52,  84 ]
 * matched:        [  16,  16,  20,  24,  32,  32,  36,  48,  56,  72,  90 ]
 * ratio (approx): [ 1.4, 1.3, 1.4, 1.5, 1.7, 1.5, 1.4, 1.5, 1.4, 1.2, 1.2 ]
 *
 * `matchedLineHeights` scale is applied to the theme to reflect the ratios
 * and maintain vertical alignment of text.
 */

export const Text = styled('span')(
  css({
    mt: 0,
    mb: 0,
    fontWeight: 400
  }),
  variant('tokens.type'),
  typography,
  common,
  // Note that common inherits a size prop from styled-system space scale,
  // which can cause conflicts
  props => typeof props.size !== 'undefined' && css({
    fontSize: props.size,
    lineHeight: props.size
  }),
  props => props.block && {
    display: 'block'
  },
  __hover,
  __focus,
  __active,
  sx
)
Text.propTypes = {
  ...typography.propTypes,
  ...common.propTypes,
  size: withMedia(
    propTypes.number,
    propTypes.string
  ),
  block: propTypes.bool
}
Text.defaultProps = {
  block: false
}
