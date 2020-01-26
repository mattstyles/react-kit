
import { compose, color, space } from 'styled-system'

import { withSx } from './withsx'

const styles = () => {
  return [
    compose(
      color,
      space
    )
  ]
}

export const Box = withSx('div')(
  ...styles()
)
Box.styles = styles
