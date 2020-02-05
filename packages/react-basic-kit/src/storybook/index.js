
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { sx } from 'react-kit-core'

import { Base } from './base'
import { Box } from '../layout/index'
import { Layout } from './layouts'
import { tokens, theme } from '../theme/index'

export const Surround = styled(Box)(
  css({
    bg: 'gray.100',
    margin: tokens.layout.padding / 2,
    padding: tokens.layout.padding,
    borderRadius: 2
  }),
  sx
)

const defaults = {
  theme: theme,
  Layout: Layout
}

export const addBase = ({
  theme,
  Layout
} = defaults) => story => {
  return (
    <Base theme={theme}>
      <Layout>
        {story()}
      </Layout>
    </Base>
  )
}
