
import styled from 'styled-components'
import { sx } from '@raid-ui/core'

import { Flex } from './flex'

/**
 * Spread is a flex component that horizontally 'spreads' children equally  across the width of its container. Items are also centrally aligned vertically within the component boundaries.
 */
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
Spread.displayName = 'BreatheMore'
