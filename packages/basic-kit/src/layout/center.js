
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { Flex } from './flex'

export const Center = styled(Flex)(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  props => props.fit && css({
    height: 'fit',
    width: 'fit'
  })
)
Center.displayName = 'StealersWheel'
