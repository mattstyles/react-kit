
import styled from 'styled-components'
// import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { Box } from '../layout/index'
import { tokens } from '../theme/index'

// export { palette, gradient } from './colors'

// export const Surround = styled(Box)`
//   background: ${themeGet('gray.100')};
//   margin: ${themeGet('space.2')}px;
//   padding: ${themeGet('space.2')}px;
//   border-radius: ${themeGet('radii.2')}px;
// `

export const Surround = styled(Box)(
  css({
    bg: 'gray.100',
    margin: tokens.layout.padding / 2,
    padding: tokens.layout.padding,
    borderRadius: 2
  })
)
