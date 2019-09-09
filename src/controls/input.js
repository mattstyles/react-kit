
import React, { useState } from 'react'
import styled from 'styled-components'
import { string, func, bool } from 'prop-types'
import { isUndefined } from 'lodash/fp'

import { getRangeTheme } from '../theme/utils'
import { noop } from '../utils'

const StyledInput = styled('input')`
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${getRangeTheme('borders', 1)};
`

export const Input = ({
  onChange,
  onSubmit,
  submitOnEnter,
  submitOnBlur,
  isFocussed,
  value,
  placeholder,
  ...more
}) => {
  const isControlled = isUndefined(value)
  let [finalValue, finalOnChange] = [value, onChange]

  if (isControlled) {
    const [stateValue, setStateValue] = useState('')
    finalValue = stateValue
    finalOnChange = event => {
      setStateValue(event.target.value)
      onChange(event.target.value)
    }
  }

  return (
    <StyledInput
      onKeyPress={event => {
        if (event.which === 13) {
          onSubmit(finalValue)
        }
      }}
      onChange={finalOnChange}
      placeholder={placeholder}
      value={finalValue}
      {...more}
    />
  )
}

Input.propTypes = {
  onChange: func,
  onSubmit: func,
  submitOnEnter: bool,
  submitOnBlur: bool,
  isFocussed: bool,
  // value: string,
  placeholder: string
}
Input.defaultProps = {
  onChange: noop,
  onSubmit: noop,
  submitOnEnter: false,
  submitOnBlur: false,
  isFocussed: false,
  // value: null,
  placeholder: ''
}
