
import styled from 'styled-components'
import propTypes from 'prop-types'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { variant } from '@styled-system/variant'
import { Flex, withSx } from '@raid/basic-kit'

const variants = variant({
  prop: 'variant',
  scale: 'variants.headers',
  variants: {
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 'header'
    },
    fixed: {
      position: 'fixed',
      top: 0,
      width: 'full',
      zIndex: 'header'
    }
  }
})

export const Header = withSx(styled(Flex))(
  props => css({
    position: props.fixed ? 'fixed' : 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: themeGet('tokens.layout.padding')(props),
    py: themeGet('tokens.layout.padding')(props) - 1,
    boxShadow: props.hasBorder && 1,
    flexDirection: 'row',
    zIndex: 1,
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
