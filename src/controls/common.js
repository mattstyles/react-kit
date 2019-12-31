
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { fit } from '../theme/mixins'

export const FocusRing = styled('div')`
  ${fit};
  outline: -webkit-focus-ring-color auto 5px;
  opacity: ${props => props.isFocussed ? 1 : 0};
  transition: opacity ${themeGet('transition.main')}ms ease-out;
`
