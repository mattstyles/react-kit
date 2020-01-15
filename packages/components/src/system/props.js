
import systemTypes from '@styled-system/prop-types'
import propTypes from 'prop-types'
import * as styledSystem from 'styled-system'

const { compose } = styledSystem

/**
 * common.
 * display, color (bg, color, etc), space (p, m, etc)
 */
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

/**
 * size
 * width, height, minimums, maximums
 */
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

/**
 * layout
 * height, width, display, align, overflow, etc
 * + boxSizing
 */
const sizing = styledSystem.system({
  boxSizing: true
})
sizing.propTypes = {
  boxSizing: propTypes.string
}

const layout = compose(
  styledSystem.layout,
  sizing
)
layout.propTypes = {
  ...systemTypes.layout,
  ...sizing.propTypes
}

/**
 * typography
 */
const typeExtras = styledSystem.system({
  whiteSpace: true,
  textDecoration: true
})
typeExtras.propTypes = {
  whiteSpace: propTypes.string,
  textDecoration: propTypes.string
}

const typography = compose(
  styledSystem.typography,
  typeExtras,
  styledSystem.layout.verticalAlign
)

typography.propTypes = {
  ...systemTypes.typography,
  ...typeExtras.propTypes,
  verticalAlign: systemTypes.layout.verticalAlign
}

export {
  common,
  layout,
  size,
  typography
}
