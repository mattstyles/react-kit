
import React, { useState } from 'react'
import { string, func, bool } from 'prop-types'

import { Text } from '../type/text'
import { noop } from '../utils'
import { tokens } from '../theme/tokens'
import { focus } from '../theme/mixins'

const StyledInput = React.forwardRef(
  (props, ref) => (
    <Text
      as='input'
      ref={ref}
      {...props}
      __css={{
        background: 'rgba(0, 0, 0, 0.02)',
        borderRadius: 2,
        border: 'none',
        padding: 2,
        fontSize: tokens.type.baseSize,
        lineHeight: 4,
        boxShadow: 'inset 0px 1px 2px 1px rgba(0,0,0,0.05)',
        '&:focus': focus,
        '&:disabled': {
          cursor: 'not-allowed',
          boxShadow: 'none'
        }
      }}
    />
  )
)

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
