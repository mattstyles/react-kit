
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { sx, fit, focusStyle, getTransition } from '@raid/ui-core'

export const FocusRing = styled('div')(
  fit,
  props => css({
    transition: getTransition('box-shadow', 'main')
  }),
  props => props.isFocussed && focusStyle,
  sx
)
