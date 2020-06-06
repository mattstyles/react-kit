
import styled from 'styled-components'
import propTypes from 'prop-types'
import { compose, flexbox, border, position } from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { sx, sf } from '@raid/ui-core'

import { layout, common } from '../system/props'

/**
 * Primitive component
 * flex, border, position, layout, color, display, space, pseudo, sx
 */
export const Flex = styled('div')(
  props => ({
    display: 'flex',
    flexDirection: props.row ? 'row' : 'column'
  }),
  compose(
    border,
    position,
    flexbox,
    common,
    layout
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
Flex.displayName = 'Ninja'
