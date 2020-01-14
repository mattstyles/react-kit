
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { fit } from '../theme/mixins'

// export const FocusRing = styled('div')`
//   ${fit};
//   outline: -webkit-focus-ring-color auto 5px;
//   opacity: ${props => props.isFocussed ? 1 : 0};
//   transition: opacity ${themeGet('transition.main')}ms ease-out;
// `

export const FocusRing = styled('div')(
  fit,
  props => css({
    outline: 'none',
    boxShadow: 'focusRing',
    zIndex: 1,
    transition: `boxShadow ${themeGet('transition.main')(props)}ms ease-out`
  })
)
