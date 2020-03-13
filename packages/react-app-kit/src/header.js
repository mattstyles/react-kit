
import styled from 'styled-components'
import propTypes from 'prop-types'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { Flex, withSx } from '@raid/basic-kit'

export const Header = withSx(styled(Flex))(
  props => css({
    position: props.fixed ? 'fixed' : 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: themeGet('tokens.layout.padding')(props),
    py: themeGet('tokens.layout.padding')(props) - 1,
    boxShadow: props.hasBorder && 1,
    flexDirection: 'row',
    zIndex: 1
  })
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
