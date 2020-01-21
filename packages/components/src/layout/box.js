
import styled from 'styled-components'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'

import { common, layout } from '../system/props'
import { base, sx } from '../utils'

const { compose } = styledSystem

export const Box = styled('div')(
  compose(
    styledSystem.border,
    styledSystem.position,
    styledSystem.flexbox
  ),
  base,
  common,
  layout,
  sx
)
Box.propTypes = {
  ...common.propTypes,
  ...layout.propTypes,
  ...systemTypes.border,
  ...systemTypes.position,
  ...systemTypes.flexbox
}
