
import styled from 'styled-components'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'

import { common, layout } from '@raid-ui/system'
import { sx, __hover, __focus, __active } from '@raid-ui/core'

const { compose } = styledSystem

/**
 * Primitive component
 * Border, position, layout (+ boxsizing), common (color, display, space)
 * plus pseudo state styling and sx
 */
export const Box = styled('div')(
  compose(
    styledSystem.border,
    styledSystem.position,
    common,
    layout
  ),
  __hover,
  __focus,
  __active,
  sx
)
Box.propTypes = {
  ...systemTypes.border,
  ...systemTypes.position,
  ...common.propTypes,
  ...layout.propTypes
}
Box.displayName = 'Ali'
