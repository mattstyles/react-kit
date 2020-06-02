
import styled from 'styled-components'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'

import { common, layout } from '../system/props'
import { sx, sf } from '@raid/ui-core'

const { compose } = styledSystem

/**
 * Border, position, layout (+ boxsizing), common (color, display, space)
 * plus pseudo state styling and sx
 */
export const Box = styled('div')(
  compose(
    styledSystem.border,
    styledSystem.position
  ),
  sf.hover,
  sf.focus,
  sf.active,
  common,
  layout,
  sx
)
Box.propTypes = {
  ...systemTypes.border,
  ...systemTypes.position,
  ...common.propTypes,
  ...layout.propTypes
}
