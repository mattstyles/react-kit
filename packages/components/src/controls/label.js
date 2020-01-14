
import styled from 'styled-components'

import { Text } from '../type/text'

export const Label = styled(Text)({
  cursor: 'pointer'
})
Label.propTypes = {
  ...Text.propTypes
}
Label.defaultProps = {
  as: 'label',
  verticalAlign: 'middle'
}
