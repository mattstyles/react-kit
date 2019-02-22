
import { space, borders, width, height, color } from 'styled-system'
import styled from 'styled-components'

export * from './view'

export const Box = styled('div')`
  ${space}
  ${color}
  ${width}
  ${height}
  ${borders}
`
