
import styled from 'styled-components'
import { variant } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { common } from '../system/props'
import { noop } from '../utils'

export const Button = styled('button').attrs(({
  disabled,
  onClick
}) => ({
  onClick: disabled ? noop : onClick
}))`
  position: relative;
  font-family: ${themeGet('type.main')};
  background: rgba(0, 0, 0, 1);
  color: ${themeGet('palette.white')};
  padding: ${themeGet('space.2')};
  font-size: ${themeGet('fontSizes.2')};
  line-height: ${props => props.icon ? 0 : 3};
  border: none;
  border-radius: ${props => props.isCircular ? '200px' : props.theme.borderRadius + 'px'};
  cursor: pointer;
  transition: background ease-out ${themeGet('transition.main')}ms, text-shadow ${themeGet('transition.main')}ms;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  text-transform: ${props => props.shouty && 'uppercase'};
  letter-spacing: ${props => props.shouty && '0.5px'};
  width: ${props => props.fit && '100%'};
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
  ${common}
`
