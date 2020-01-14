
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { fit, focus } from '../theme/mixins'
import { getTransition } from '../utils'

export const FocusRing = styled('div')(
  fit,
  props => css({
    transition: getTransition('box-shadow', 'transition.main', 'ease-out')(props)
  }),
  props => props.isFocussed && focus(props)
)
