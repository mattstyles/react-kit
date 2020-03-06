
import styled from 'styled-components'
import propTypes from 'prop-types'
import { css } from '@styled-system/css'
import { sx } from 'react-kit-core'

import { Box } from './box'
import { depth } from '../theme/mixins'
import { variants } from './card.variants.js'

export const Card = styled(Box)(
  props => css({
    p: 2,
    border: props.depth < 1 && 'light.200'
  }),
  variants,
  depth,
  sx
)
Card.propTypes = {
  ...Box.propTypes,
  hasBorder: propTypes.bool
}
Card.defaultProps = {
  variant: 'standard',
  depth: 0,
  hasBorder: true
}
