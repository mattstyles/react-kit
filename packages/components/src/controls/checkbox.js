
import React, { useState } from 'react'
import styled from 'styled-components'
import { func, bool, string, number } from 'prop-types'
import { css } from '@styled-system/css'

import { Label } from './label'
import { Icon } from '../icons/index'
import { Box } from '../layout/index'
import { noop } from '../utils'
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

const CheckMark = styled(Icon)(
  props => css({
    opacity: props.isChecked ? 1 : 0,
    transition: getTransition('opacity', 'transition.main')(props)
  })
)
CheckMark.defaultProps = {
  size: '100%'
}

const Wrapper = styled(Box)(
  props => css({
    position: 'relative',
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition: `${getTransition('box-shadow', 'transition.main')(props)}, ${getTransition('background', 'transition.main')(props)}`
  }),
  props => props.isFocussed && focus(props)
)
Wrapper.defaultProps = {
  border: 'light',
  borderRadius: 3
}

const randStr = () => Math.random().toString(36).slice(2)

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
        width={size || width}
        height={size || height}
        isFocussed={isFocussed}
        isSelected={finalValue}
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
