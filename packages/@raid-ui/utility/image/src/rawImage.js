
import styled from 'styled-components'
import propTypes from 'prop-types'

import { Box } from '@raid-ui/container'
import { rounding } from '@raid-ui/core'

export const RawImage = styled(Box)(
  {
    width: '100%',
    height: '100%'
  },
  props => ({
    objectFit: props.cover
  }),
  rounding
)
RawImage.propTypes = {
  ...Box.propTypes,
  cover: propTypes.string
}
RawImage.defaultProps = {
  as: 'img',
  rounding: 'rounded',
  cover: 'cover'
}
RawImage.displayName = 'ChappedImage'
