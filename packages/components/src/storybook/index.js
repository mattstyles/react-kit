
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { Box } from '../layout/index'
import { tokens } from '../theme/index'

export const Surround = styled(Box)(
  css({
    bg: 'gray.100',
    margin: tokens.layout.padding / 2,
    padding: tokens.layout.padding,
    borderRadius: 2
  })
)

export const Layout = styled(Box)(
  css({
    width: ['100%', '30rem', '36rem'],
    mx: 'auto',
    px: [tokens.layout.padding + 2, tokens.layout.padding],
    py: tokens.layout.padding + 2,
    boxSizing: 'border-box'
  })
)
