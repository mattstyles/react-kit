
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

import {getIcon} from './icons'
import {getTheme, getColor} from '../theme/utils'

const StyledIcon = styled.i`
  position: relative;
  display: block;
  width: ${props => props.size || getTheme('baseIconSize')}rem;
  height: ${props => props.size || getTheme('baseIconSize')}rem;

  svg {
    fill: ${props => props.color || getColor('main')};
    transition: fill ease-out ${getTheme('transition.main')}ms;
  }

  ${props => props.hover && css`
    :hover {
      svg {
        fill: ${props => props.hover || getColor('primaryDark')};
        transition: fill ease-in ${getTheme('transition.main')}ms;
      }
    }
  `}
`

export const Icon = ({
  icon,
  size,
  color,
  hover
}) => {
  const svg = {
    __html: getIcon(icon)
  }

  return (
    <StyledIcon
      {...{size, color, hover}}
      dangerouslySetInnerHTML={svg}
    />
  )
}
Icon.defaultProps = {
  icon: '',
  size: null,
  color: '',
  hover: ''
}
Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  color: PropTypes.string,
  hover: PropTypes.string
}
