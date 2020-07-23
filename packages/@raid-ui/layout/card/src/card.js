
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { sx, depth } from '@raid-ui/core'
import { Box } from '@raid-ui/container'
import { variants } from './card.variants.js'

export const Card = styled(Box)(
  props => css({
    border: props.depth < 1 && 'light.200'
  }),
  variants,
  depth,
  sx
)
Card.propTypes = {
  ...Box.propTypes
}
Card.defaultProps = {
  variant: 'standard',
  depth: 0,
  p: 2
}
Card.displayName = 'UnfortunatelyPopular'
