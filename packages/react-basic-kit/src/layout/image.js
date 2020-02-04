
import styled from 'styled-components'

import { Box } from './box'

export const Image = styled(Box)(
  {
    width: '100%',
    height: 'auto'
  }
)
Image.propTypes = {
  ...Box.propTypes
}
