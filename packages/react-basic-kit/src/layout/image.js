
import styled from 'styled-components'

import { Box } from './box'
import { rounding } from '../variants'

export const Image = styled(Box)(
  {
    width: '100%',
    height: 'auto'
  },
  rounding
)
Image.propTypes = {
  ...Box.propTypes
}
Image.defaultProps = {
  as: 'img',
  rounding: 'rounded'
}
