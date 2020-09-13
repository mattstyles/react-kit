
import propTypes from 'prop-types'
import styled from 'styled-components'

import { sx } from '@raid-ui/core'
import { Text } from '@raid-ui/type'

export const Label = styled(Text)(
  {
    verticalAlign: 'middle',
    userSelect: 'none'
  },
  props => props.pointer && ({
    cursor: 'pointer'
  }),
  sx
)
Label.propTypes = {
  ...Text.propTypes,
  pointer: propTypes.bool,
  sx: propTypes.object
}
Label.defaultProps = {
  pointer: false,
  as: 'label'
}
Label.displayName = 'Label'
