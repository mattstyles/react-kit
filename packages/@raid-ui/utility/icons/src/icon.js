
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'

export const Icon = styled('span')(
  props => css({
    width: props.size || props.width,
    height: props.size || props.height,
    color: props.color,
    display: 'inline-flex',
    position: 'relative'
  })
)
Icon.propTypes = {
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  color: propTypes.string
}
Icon.defaultProps = {
  size: 8
}
