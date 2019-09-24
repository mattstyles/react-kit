
import styled from 'styled-components'

import { fit } from '../theme/mixins'
import { getTheme } from '../theme/utils'

export const FocusRing = styled('div')`
  ${fit};
  outline: -webkit-focus-ring-color auto 5px;
  opacity: ${props => props.isFocussed ? 1 : 0};
  transition: opacity ${getTheme('transition.main')}ms ease-out;
`
