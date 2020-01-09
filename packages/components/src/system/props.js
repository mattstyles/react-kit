
import systemTypes from '@styled-system/prop-types'
import propTypes from 'prop-types'
import * as styledSystem from 'styled-system'

const { compose } = styledSystem

const common = compose(
  styledSystem.display,
  styledSystem.space,
  styledSystem.color
)

common.propTypes = {
  display: systemTypes.layout.display,
  ...systemTypes.space,
  ...systemTypes.color,
  as: propTypes.elementType
}

const size = compose(
  styledSystem.layout.width,
  styledSystem.layout.height,
  styledSystem.layout.minWidth,
  styledSystem.layout.minHeight,
  styledSystem.layout.maxWidth,
  styledSystem.layout.maxHeight
)
size.propTypes = {
  width: systemTypes.layout.width,
  height: systemTypes.layout.height,
  minWidth: systemTypes.layout.minWidth,
  minHeight: systemTypes.layout.minHeight,
  maxWidth: systemTypes.layout.maxWidth,
  maxHeight: systemTypes.layout.maxHeight
}

const layout = styledSystem.layout
layout.propTypes = systemTypes.layout

export {
  common,
  layout,
  size
}
