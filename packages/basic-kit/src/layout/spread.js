
import styled from 'styled-components'
import { sx } from '@raid/ui-core'

import { Flex } from './flex'

export const Spread = styled(Flex)(
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sx
)
Spread.propTypes = {
  ...Flex.propTypes
}
