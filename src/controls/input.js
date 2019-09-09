
import React, { useState } from 'react'
import styled from 'styled-components'
import { string, func, bool } from 'prop-types'
import { isUndefined } from 'lodash/fp'

import { getRangeTheme, getTheme } from '../theme/utils'
import { noop } from '../utils'

const StyledInput = styled('input')`
  background: rgba(0, 0, 0, 0.1);
  border-radius: ${getRangeTheme('borders', 1)}px;
  border: none;
  padding: ${getRangeTheme('space', 2)}px;
  font-size: ${getTheme('type.size.base')}rem;
`

export const Input = ({
  onChange,
  onSubmit,
  submitOnEnter,
  submitOnBlur,
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

  const onEnterKeySubmit = event => {
    if (submitOnEnter && finalValue && event.which === 13) {
      onSubmit(finalValue)
    }
  }

  const onBlur = event => {
    if (submitOnBlur && finalValue) {
      onSubmit(finalValue)
    }
  }

  return (
    <StyledInput
      onBlur={onBlur}
      onKeyPress={onEnterKeySubmit}
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
  // value: string,
  placeholder: string
}
Input.defaultProps = {
  onChange: noop,
  onSubmit: noop,
  submitOnEnter: false,
  submitOnBlur: false,
  // value: null,
  placeholder: ''
}
