
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { sx } from 'react-kit-core'

import { Box } from './box'
import { depth } from '../theme/mixins'
import { variants } from './card.variants.js'

export const Card = styled(Box)(
  css({
    p: 2
  }),
  variants,
  depth,
  sx
)
Card.propTypes = {
  ...Box.propTypes
}
Card.defaultProps = {
  variant: 'standard'
}
