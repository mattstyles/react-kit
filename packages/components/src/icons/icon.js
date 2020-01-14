
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { getTransition } from '../utils'
import { getIcon } from './icons'
import { Box } from '../layout/layout'
import { tokens } from '../theme/index'

const StyledIcon = styled(Box)(
  props => css({
    position: 'relative',
    display: 'block',
    svg: {
      fill: props.color,
      transition: getTransition('fill', 'transition.main')
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
  as: 'i'
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
  // @TODO add styled system props
  ...Box.propTypes
}
