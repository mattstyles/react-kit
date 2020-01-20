
import propTypes from 'prop-types'
import styled from 'styled-components'

import { Text } from '../type/text'
import { withSx } from '../utils'

export const Label = withSx(styled(Text))({
  cursor: 'pointer'
})
Label.propTypes = {
  ...Text.propTypes,
  sx: propTypes.object
}
Label.defaultProps = {
  as: 'label',
  verticalAlign: 'middle'
}
