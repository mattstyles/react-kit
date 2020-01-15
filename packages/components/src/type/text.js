
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

import { typography, common } from '../system/props'

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
  typography,
  common,
  props => props.size && css({
    fontSize: props.size,
    lineHeight: themeGet(`matchedLineHeights.${props.size}`)(props)
  })
)
Text.propTypes = {
  ...typography.propTypes,
  ...common.propTypes,
  size: propTypes.string
}
Text.defaultProps = {
  lineHeight: 3
}
