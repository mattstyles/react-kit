
import React, { useState } from 'react'
import styled from 'styled-components'
import { func, bool, string, number } from 'prop-types'
import { css } from '@styled-system/css'

import { Icon } from '../icons/index'
import { Box } from '../layout/index'
import { noop, getTransition } from '../utils'
import { focus } from '../theme/mixins'
import { tokens } from '../theme/index'

const StyledCheckbox = styled('input')(
  {
    top: 0,
    left: 0,
    width: '100%',
    cursor: 'inherit',
    height: '100%',
    margin: 0,
    opacity: 0,
    padding: 0,
    position: 'absolute'
  }
)

const CheckMark = styled(Icon)(
  props => css({
    opacity: props.isChecked ? 1 : 0,
    transition: getTransition('opacity', 'transition.main')
  })
)

const Wrapper = styled(Box)(
  props => css({
    borderRadius: 3,
    border: 'light',
    position: 'relative',
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition: getTransition('box-shadow', 'transition.main')(props)
  }),
  props => props.isFocussed && focus(props)
)

export const Checkbox = ({
  value,
  onChange,
  id,
  name,
  width,
  height,
  color,
  size,
  ...more
}) => {
  const isControlled = value === undefined
  let [finalValue, finalOnChange] = [value, onChange]

  const [isFocussed, setIsFocussed] = useState(false)

  if (isControlled) {
    const [stateValue, setStateValue] = useState(false)
    finalValue = stateValue
    finalOnChange = event => {
      setStateValue(!stateValue)
      onChange(!stateValue)
    }
  }

  const onChangeCallback = isControlled
    ? finalOnChange
    : event => finalOnChange(!finalValue)

  return (
    <Wrapper
      {...more}
      width={size || width}
      height={size || height}
      isFocussed={isFocussed}
    >
      <CheckMark icon='check' isChecked={finalValue} color={color} />
      <StyledCheckbox
        type='checkbox'
        checked={finalValue}
        value={finalValue}
        onChange={onChangeCallback}
        onFocus={event => setIsFocussed(true)}
        onBlur={event => setIsFocussed(false)}
        id={id}
        name={name}
      />
    </Wrapper>
  )
}

const defaultSize = 8

Checkbox.defaultProps = {
  // value: false,
  onChange: noop,
  width: defaultSize,
  height: defaultSize,
  size: defaultSize,
  color: tokens.type.body.dark
}
Checkbox.propTypes = {
  value: bool,
  onChange: func,
  id: string,
  name: string,
  width: number,
  height: number,
  color: string,
  size: number
}
