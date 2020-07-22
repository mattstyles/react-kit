
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { center } from '@raid-ui/core'

import { Flex } from './flex'

export const Center = styled(Flex)(
  center,
  props => props.fit && css({
    height: 'fit',
    width: 'fit'
  })
)
Center.displayName = 'StealersWheel'
