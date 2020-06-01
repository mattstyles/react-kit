
import styled from 'styled-components'
import propTypes from 'prop-types'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { sx } from '@raid/ui-core'

import { Box } from './box'

export const Flex = styled(Box)(
  props => ({
    display: 'flex',
    flexDirection: props.row ? 'row' : 'column'
  }),
  styledSystem.flexbox,
  sx
)
Flex.propTypes = {
  ...Box.propTypes,
  ...systemTypes.flexbox,
  row: propTypes.bool
}
Flex.defaultProps = {
  row: false
}
