
import React from 'react'
import propTypes from 'prop-types'

import { Text } from '../type/text'

export const Label = React.forwardRef(
  (props, ref) => {
    return (
      <Text
        ref={ref}
        {...props}
        __css={{
          cursor: 'pointer',
          verticalAlign: 'middle'
        }}
      />
    )
  }
)
Label.propTypes = {
  ...Text.propTypes,
  sx: propTypes.object
}
Label.defaultProps = {
  as: 'label'
}
