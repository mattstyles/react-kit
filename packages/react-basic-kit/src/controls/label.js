
import propTypes from 'prop-types'
import { sx } from 'react-kit-core'
import styled from 'styled-components'

import { Text } from '../type/text'

export const Label = styled(Text)(
  {
    cursor: 'pointer',
    verticalAlign: 'middle'
  },
  sx
)
Label.propTypes = {
  ...Text.propTypes,
  sx: propTypes.object
}
Label.defaultProps = {
  as: 'label'
}
