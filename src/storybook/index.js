
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Box } from '../utility'

export const Surround = styled(Box)`
  background: ${themeGet('palette.background.0')};
  margin: ${themeGet('space.2')}px;
  padding: ${themeGet('space.2')}px;
  border-radius: ${themeGet('radii.2')}px;
`
