
import styled from 'styled-components'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'
import propTypes from 'prop-types'

const { compose } = styledSystem

/**
 * Spacer is a blank element whose only purpose is to affect the layout
 */
export const Spacer = styled('div')(
  compose(
    styledSystem.space,
    styledSystem.flexbox,
    styledSystem.layout.display
  ),
  props => ({
    display: props.isInline ? 'inline-flex' : 'block'
  })
)
Spacer.propTypes = {
  ...systemTypes.space,
  ...systemTypes.flexbox,
  display: systemTypes.layout.display,
  isInline: propTypes.bool
}
Spacer.displayName = 'Breathe'
