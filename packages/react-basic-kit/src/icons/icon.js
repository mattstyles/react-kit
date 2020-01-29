
import React from 'react'
import propTypes from 'prop-types'
import { styled } from 'react-kit-core'
import { css } from '@styled-system/css'

import { getIcon } from './icons'
import { Box } from '../layout/box'
import { tokens } from '../theme/index'
import { getTransition } from '../theme/utils'

export const StyledIcon = styled('i')(
  ({ size, width, height, color, hover, rotation }) => css({
    svg: {
      width: size || width,
      height: size || height,
      fill: color,
      transition: getTransition('fill', 'main')
    },
    ':hover svg': {
      fill: hover
    },
    ...rotation && {
      transformOrigin: 'center center',
      transform: `rotate(${rotation}deg)`
    },
    display: 'inline-flex',
    position: 'relative'
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
  ...Box.propTypes
}
