
import styled from 'styled-components'
import propTypes from 'prop-types'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { withSx } from '@raid-ui/core'
import { Flex } from '@raid-ui/container'

import { variants } from './header.variants.js'

export const Header = withSx(styled(Flex))(
  props => css({
    position: props.fixed ? 'fixed' : 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: themeGet('tokens.layout.padding')(props),
    py: themeGet('tokens.layout.padding')(props) - 1,
    boxShadow: props.hasBorder && 1,
    flexDirection: 'row',
    zIndex: 'header',
    bg: 'white'
  }),
  variants
)
Header.propTypes = {
  ...Flex.propTypes,
  fixed: propTypes.bool,
  hasBorder: propTypes.bool
}
Header.defaultProps = {
  as: 'header',
  fixed: false,
  hasBorder: true
}
