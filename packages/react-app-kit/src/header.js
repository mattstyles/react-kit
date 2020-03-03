
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { Flex, sx } from 'react-basic-kit'

export const Header = styled(Flex)(
  props => css({
    justifyContent: 'space-between',
    alignItems: 'center',
    px: themeGet('tokens.layout.padding')(props),
    py: themeGet('tokens.layout.padding')(props) - 1,
    boxShadow: 1,
    flexDirection: 'row'
  }),
  sx
)
Header.defaultProps = {
  as: 'header'
}
