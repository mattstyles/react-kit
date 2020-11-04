
import styled from 'styled-components'

import { View } from './view'

/**
 * Screen is a full sized View and ensures the viewport is at least as
 * large as the screen upon which it is displayed
 */
export const Screen = styled(View)(
  {
    minWidth: '100vw',
    minHeight: '100vh'
  }
)
Screen.propTypes = View.propTypes
Screen.displayName = 'Terminal'
