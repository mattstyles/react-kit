
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

// @TODO add alpha white and black to theme colours
export const backgroundColour = 'rgba(0, 0, 0, 0.02)'
