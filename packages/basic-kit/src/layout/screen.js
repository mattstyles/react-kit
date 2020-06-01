
import styled from 'styled-components'

import { View } from './view'

export const Screen = styled(View)(
  {
    minWidth: '100vw',
    minHeight: '100vh'
  }
)
Screen.propTypes = View.propTypes
