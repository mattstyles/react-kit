
import { space, borders, width, height, color, background, display, borderRadius } from 'styled-system'
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
