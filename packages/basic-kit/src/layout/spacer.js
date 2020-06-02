
import styled from 'styled-components'
import * as styledSystem from 'styled-system'
import systemTypes from '@styled-system/prop-types'

const { compose } = styledSystem

/**
 * Spacer is a blank element whose only purpose is to affect the layout
 */
export const Spacer = styled('div')(
  compose(
    styledSystem.space,
    styledSystem.layout.display,
    styledSystem.flexbox
  )
)
Spacer.propTypes = {
  ...systemTypes.space,
  ...systemTypes.flexbox,
  display: systemTypes.layout.display
}
