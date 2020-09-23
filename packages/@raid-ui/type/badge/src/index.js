
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { sx } from '@raid-ui/core'

import { Text } from '@raid-ui/text'
import { variants } from './badge.variants'

export const Badge = styled(Text)(
  props => css({
    borderRadius: themeGet('tokens.layout.rounding')(props),
    px: 2,
    py: 1,
    display: 'inline-block'
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
