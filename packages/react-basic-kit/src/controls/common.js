
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { fit, focus } from '../theme/mixins'
import { getTransition } from '../theme/utils'

export const FocusRing = styled('div')(
  fit,
  props => css({
    transition: getTransition('box-shadow', 'main')(props)
  }),
  props => props.isFocussed && focus
)
