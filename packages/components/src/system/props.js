
import systemTypes from '@styled-system/prop-types'
import propTypes from 'prop-types'
import {
  compose, display, space, color
} from 'styled-system'

const common = compose(
  display,
  space,
  color
)

common.propTypes = {
  display: systemTypes.layout.display,
  ...systemTypes.space,
  ...systemTypes.color,
  as: propTypes.elementType
}

export {
  common
}
