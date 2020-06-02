
import styled from 'styled-components'
import propTypes from 'prop-types'
import { compose, border, position, flexbox } from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { sf, sx } from '@raid/ui-core'

import { common, layout } from '../system/props'

export const Flex = styled('div')(
  props => ({
    display: 'flex',
    flexDirection: props.row ? 'row' : 'column'
  }),
  compose(
    border,
    position,
    common,
    layout,
    flexbox
  ),
  sf.hover,
  sf.focus,
  sf.active,
  sx
)
Flex.propTypes = {
  ...systemTypes.flexbox,
  ...systemTypes.border,
  ...systemTypes.position,
  ...common.propTypes,
  ...layout.propTypes,
  row: propTypes.bool
}
Flex.defaultProps = {
  row: false
}
