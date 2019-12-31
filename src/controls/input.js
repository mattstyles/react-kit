
import React, { useState } from 'react'
import styled from 'styled-components'
import { string, func, bool } from 'prop-types'
import { themeGet } from '@styled-system/theme-get'

import { noop } from '../utils'

const StyledInput = styled('input')`
  background: rgba(0, 0, 0, 0.1);
  border-radius: ${themeGet('borders.1')}px;
  border: none;
  padding: ${themeGet('space.2')}px;
  font-size: ${themeGet('type.size.base')}rem;
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
  const isControlled = value === undefined
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

  const onChangeCallback = isControlled
    ? finalOnChange
    : event => finalOnChange(event.target.value)

  return (
    <StyledInput
      onBlur={onBlur}
      onKeyPress={onEnterKeySubmit}
      onChange={onChangeCallback}
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
