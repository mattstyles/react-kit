
import propTypes from 'prop-types'
import { styled } from 'react-kit-core'

import { Text } from '../type/text'

export const Label = styled('label')(
  ...Text.styles,
  {
    cursor: 'pointer',
    verticalAlign: 'middle'
  }
)
Label.propTypes = {
  ...Text.propTypes,
  sx: propTypes.object
}
Label.defaultProps = {
  as: 'label'
}
