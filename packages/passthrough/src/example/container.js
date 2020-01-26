
import { compose, layout } from 'styled-system'
import { css } from '@styled-system/css'

import { Box } from './box'
import { withSx } from './withsx'

const styles = () => [
  ...Box.styles(),
  compose(
    layout
  ),
  css({
    m: 2,
    p: 2
  })
]

export const Container = withSx('div')(
  ...styles()
)
Container.styles = styles
