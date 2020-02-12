
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { sx } from 'react-kit-core'

import { Text } from './text'
import { variants } from './badge.variants'
import { tokens } from '../theme/tokens'

export const Badge = styled(Text)(
  css({
    borderRadius: tokens.layout.rounding,
    px: 2,
    py: 1
  }),
  variants,
  sx
)
Badge.propTypes = {
  ...Text.propTypes
}
Badge.defaultProps = {
  variant: 'standard'
}
