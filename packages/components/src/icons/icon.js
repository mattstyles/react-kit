
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { getIcon } from './icons'
import { Box } from '../layout/layout'
import { tokens } from '../theme/index'
import { getTransition } from '../theme/utils'

const StyledIcon = styled(Box)(
  props => css({
    svg: {
      width: props.size || props.width,
      height: props.size || props.height,
      fill: props.color,
      transition: getTransition('fill', 'transition.main')(props)
    },
    ':hover svg': {
      fill: props.hover
    }
  }),
  props => props.rotation && css({
    transformOrigin: 'center center',
    transform: `rotate(${props.rotation}deg)`
  })
)
StyledIcon.defaultProps = {
  as: 'i',
  display: 'inline-flex',
  position: 'relative'
}

export const Icon = ({
  icon,
  getIcon,
  ...passProps
}) => {
  const svg = {
    __html: getIcon(icon)
  }

  return (
    <StyledIcon
      {...passProps}
      dangerouslySetInnerHTML={svg}
    />
  )
}
Icon.defaultProps = {
  getIcon: getIcon,
  size: 8,
  rotation: 0,
  color: tokens.type.body.dark,
  hover: ''
}
Icon.propTypes = {
  icon: propTypes.string.isRequired,
  getIcon: propTypes.func,
  rotation: propTypes.number,
  color: propTypes.string,
  hover: propTypes.string,
  ...Box.propTypes
}
