
import styled from 'styled-components'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import { css } from '@styled-system/css'

import { common, layout } from '../system/props'

const { compose } = styledSystem

const base = props => css(props.__css)
const sx = props => css(props.sx)

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
