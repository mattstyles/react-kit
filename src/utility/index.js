
import { space, borders, width, height,
  color, background, display, borderRadius,
  flex, flexDirection, justifyContent } from 'styled-system'
import styled from 'styled-components'

export * from './view'

export const Box = styled('div')`
  ${space}
  ${color}
  ${background}
  ${width}
  ${height}
  ${borders}
  ${borderRadius}
  ${display}
`

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  ${flex}
  ${flexDirection}
  ${justifyContent}
`
