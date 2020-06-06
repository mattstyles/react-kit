
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { Flex } from './flex'
import { center } from '../theme/mixins'

export const Center = styled(Flex)(
  center,
  props => props.fit && css({
    height: 'fit',
    width: 'fit'
  })
)
Center.displayName = 'StealersWheel'
