
import styled from 'styled-components'

import { Box, utils } from '../'

const { getRangeTheme } = utils

export const Surround = styled(Box)`
  background: ${getRangeTheme('palette.background', 0)};
  margin: ${getRangeTheme('space', 2)}px;
  padding: ${getRangeTheme('space', 2)}px;
  border-radius: ${getRangeTheme('borders', 1)}px;
`
