
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { space, display } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { getIcon } from './icons'

const getIconSize = props => props.size || themeGet('baseIconSize')
const getIconColor = props => props.color || themeGet('color.main')
const getIconHover = props => props.hover || themeGet('color.primaryDark')

const StyledIcon = styled.i`
  position: relative;
  display: block;
  width: ${getIconSize}rem;
  height: ${getIconSize}rem;
  transform-origin: center center;
  transform: rotate(${props => props.rotation}deg);

  svg {
    fill: ${getIconColor};
    transition: fill ease-out ${themeGet('transition.main')}ms;
  }

  ${props => props.hover && css`
    :hover {
      svg {
        fill: ${getIconHover};
        transition: fill ease-in ${themeGet('transition.main')}ms;
      }
    }
  `}

  ${space}
  ${display}
`

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
  icon: '',
  getIcon: getIcon,
  size: null,
  rotation: 0,
  color: '',
  hover: ''
}
Icon.propTypes = {
  icon: PropTypes.string,
  getIcon: PropTypes.func,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  rotation: PropTypes.number,
  color: PropTypes.string,
  hover: PropTypes.string
  // @TODO add styled system props
}
