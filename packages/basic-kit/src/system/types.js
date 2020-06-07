
import propTypes from 'prop-types'

/**
 * Media queries are bracketed, but otherwise the same type as unbracketed.
 * This helper adds both variants (bracketed or not)
 */
export const withMedia = (...types) => {
  return propTypes.oneOfType([
    ...types,
    propTypes.arrayOf(propTypes.oneOfType([
      ...types
    ]))
  ])
}
