
import styled from 'styled-components'

import { Flex } from './flex'

// @TODO add 'break' to turn into a stack at a breakpoint?
export const Spread = styled(Flex)(
  {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
)
Spread.defaultProps = {
  ...Flex.defaultProps
}
