
import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import { getTransition } from '@raid/ui-core'

import { getIcon } from './icons'
import { Box } from '../layout/box'

export const StyledIcon = styled('i')(
  ({ size, width, height, color, fill, hover, rotation, stroke, strokeWidth }) => props => css({
    width: size || width,
    height: size || height,
    svg: {
      width: size || width,
      height: size || height,
      fill: fill || color || themeGet('tokens.type.body.main')(props),
      stroke: stroke,
      strokeWidth: strokeWidth,
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
  }),
  props => {
    return css({
      svg: props.sx,
      display: props.block && 'block'
    })
  },
  props => css(props.wx)
)
StyledIcon.defaultProps = {
  as: 'i'
}

export const Icon = ({
  icon,
  getIcon,
  sx,
  wx,
  ...more
}) => {
  const svg = {
    __html: getIcon(icon)
  }

  return (
    <StyledIcon
      {...more}
      sx={sx}
      wx={wx}
      dangerouslySetInnerHTML={svg}
    />
  )
}
Icon.defaultProps = {
  getIcon: getIcon,
  size: 8,
  rotation: 0,
  hover: '',
  block: false
}
Icon.propTypes = {
  icon: propTypes.string.isRequired,
  getIcon: propTypes.func,
  rotation: propTypes.number,
  color: propTypes.string,
  hover: propTypes.string,
  block: propTypes.bool,
  ...Box.propTypes
}
