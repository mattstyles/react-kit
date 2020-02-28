
import React, { useState } from 'react'
import { string, func, bool } from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { sx } from 'react-kit-core'

import { noop } from '../utils'
import { tokens } from '../theme/tokens'
import { getTransition } from '../theme/utils'

import {
  variants
} from './input.variants.js'

const StyledInput = styled('input')(
  css({
    py: 2,
    px: 3,
    fontSize: tokens.type.baseSize,
    lineHeight: tokens.type.baseSize,
    borderRadius: tokens.layout.rounding,
    ':focus': {
      outline: 'none',
      zIndex: 1,
      boxShadow: theme => `inset 0px 1px 2px 1px hsla(0, 0%, 0%, 0), ${theme.shadows.focusRing}`
    },
    transition: getTransition('box-shadow', 'main'),
    '&:disabled': {
      cursor: 'not-allowed',
      boxShadow: 'none',
      '&::placeholder': {
        color: 'dark.300'
      }
    }
  }),
  variants,
  sx
)

export const Input = ({
  onFocus,
  onBlur,
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

  const managedOnBlur = event => {
    if (submitOnBlur && finalValue) {
      onSubmit(finalValue)
    }

    onBlur(event)
  }

  const onChangeCallback = isControlled
    ? finalOnChange
    : event => finalOnChange(event.target.value)

  return (
    <StyledInput
      onFocus={onFocus}
      onBlur={managedOnBlur}
      onKeyPress={onEnterKeySubmit}
      onChange={onChangeCallback}
      placeholder={placeholder}
      value={finalValue}
      {...more}
    />
  )
}

Input.propTypes = {
  onFocus: func,
  onBlur: func,
  onChange: func,
  onSubmit: func,
  submitOnEnter: bool,
  submitOnBlur: bool,
  // value: string,
  placeholder: string
}
Input.defaultProps = {
  onFocus: noop,
  onBlur: noop,
  onChange: noop,
  onSubmit: noop,
  submitOnEnter: false,
  submitOnBlur: false,
  // value: null,
  placeholder: '',
  variant: 'standard'
}
Input.displayName = 'FeedMeSeymour'
