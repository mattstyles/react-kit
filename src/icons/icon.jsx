
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { getIcon } from './icons'
import { getTheme, getColor } from '../theme/utils'

const getIconSize = props => props.size || getTheme('baseIconSize')
const getIconColor = props => props.color || getColor('main')
const getIconHover = props => props.hover || getColor('primaryDark')

const StyledIcon = styled.i`
  position: relative;
  display: block;
  width: ${getIconSize}rem;
  height: ${getIconSize}rem;

  svg {
    fill: ${getIconColor};
    transition: fill ease-out ${getTheme('transition.main')}ms;
  }

  ${props => props.hover && css`
    :hover {
      svg {
        fill: ${getIconHover};
        transition: fill ease-in ${getTheme('transition.main')}ms;
      }
    }
  `}
`

export const Icon = ({
  icon,
  size,
  color,
  hover,
  getIcon
}) => {
  const svg = {
    __html: getIcon(icon)
  }

  return (
    <StyledIcon
      {...{ size, color, hover }}
      dangerouslySetInnerHTML={svg}
    />
  )
}
Icon.defaultProps = {
  icon: '',
  size: null,
  color: '',
  hover: '',
  getIcon: getIcon
}
Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  color: PropTypes.string,
  hover: PropTypes.string,
  getIcon: PropTypes.func
}
