
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { Base } from './base'
import { Box } from '../layout/index'
import { Layout } from './layouts'
import { tokens } from '../theme/index'

export const Surround = styled(Box)(
  css({
    bg: 'gray.100',
    margin: tokens.layout.padding / 2,
    padding: tokens.layout.padding,
    borderRadius: 2
  })
)

export const addBase = ({ theme } = {}) => story => {
  return (
    <Base theme={theme}>
      <Layout>
        {story()}
      </Layout>
    </Base>
  )
}
