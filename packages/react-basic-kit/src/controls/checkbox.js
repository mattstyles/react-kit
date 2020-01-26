
import React, { useState } from 'react'
import styled from 'styled-components'
import { func, bool, string, number } from 'prop-types'

import { Label } from './label'
import { Icon } from '../icons/index'
import { Box } from '../layout/index'
import { noop, randStr } from '../utils'
import { focus, fill } from '../theme/mixins'
import { getTransition } from '../theme/utils'
import { tokens } from '../theme/index'

const StyledCheckbox = styled('input')(
  {
    cursor: 'inherit',
    margin: 0,
    opacity: 0,
    padding: 0
  },
  fill
)

const CheckMark = React.forwardRef(
  ({ isChecked, ...props }, ref) => {
    return (
      <Icon
        ref={ref}
        {...props}
        __css={{
          opacity: isChecked ? 1 : 0,
          transition: getTransition('opacity', 'transition.main')
        }}
        size='100%'
      />
    )
  }
)

// This makes the outline a square by using border
// Use a squircle icon instead, much nicer.
const Wrapper = React.forwardRef(
  (props, ref) => {
    return (
      <Box
        ref={ref}
        {...props}
        __css={{
          position: 'relative',
          boxSizing: 'border-box',
          display: 'inline-block',
          verticalAlign: 'middle',
          cursor: 'pointer',
          transition: t => `${getTransition('box-shadow', 'transition.main')(t)}, ${getTransition('background', 'transition.main')(t)}`,
          border: 'light',
          borderRadius: 3,
          ...props.isFocussed && focus
        }}
      />
    )
  }
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
  fontSize,
  children,
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

  const connect = id || randStr()

  return (
    <>
      <Wrapper
        {...more}
        isFocussed={isFocussed}
        isSelected={finalValue}
        sx={{
          width: size || width,
          height: size || height
        }}
      >
        <CheckMark
          icon='check'
          color={color}
          isChecked={finalValue}
        />
        <StyledCheckbox
          type='checkbox'
          checked={finalValue}
          value={finalValue}
          onChange={onChangeCallback}
          onFocus={event => setIsFocussed(true)}
          onBlur={event => setIsFocussed(false)}
          id={connect}
          name={name}
        />
      </Wrapper>
      {children && <Label htmlFor={connect} ml={1} fontSize={fontSize}>{children}</Label>}
    </>
  )
}

const defaultSize = 6

Checkbox.propTypes = {
  value: bool,
  onChange: func,
  id: string,
  name: string,
  width: number,
  height: number,
  color: string,
  size: number,
  fontSize: number
}
Checkbox.defaultProps = {
  onChange: noop,
  width: defaultSize,
  height: defaultSize,
  size: defaultSize,
  fontSize: 3,
  color: tokens.type.body.dark,
  selectColor: 'transparent'
}
