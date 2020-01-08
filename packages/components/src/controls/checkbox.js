
import React, { useState } from 'react'
import styled from 'styled-components'
import { func, bool, string, number } from 'prop-types'
import { themeGet } from '@styled-system/theme-get'

import { Icon } from '../icons'
import { Box } from '../utility'
import { noop } from '../utils'
import { FocusRing } from './common'

const StyledCheckBox = styled('input')`
  top: 0;
  left: 0;
  width: 100%;
  cursor: inherit;
  height: 100%;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
`

const CheckMark = styled(Icon)`
  opacity: ${props => props.isChecked ? 1 : 0};
  transition: opacity ${themeGet('transition.main')}ms ease-out;
  width: 100%;
  height: 100%;
`

const Wrapper = styled(Box)`
  border-radius: ${themeGet('borders.1')}px;
  border: 1px solid hsla(0, 0%, 0%, 0.15);
  position: relative;
  padding: ${themeGet('space.1')}px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`

export const CheckBox = ({
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
    <Wrapper {...more} width={size || width} height={size || height}>
      <FocusRing isFocussed={isFocussed} />
      <CheckMark icon={'CHECK'} isChecked={finalValue} color={color} />
      <StyledCheckBox
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

const defaultSize = 32

CheckBox.defaultProps = {
  // value: false,
  onChange: noop,
  width: defaultSize,
  height: defaultSize,
  color: 'hsla(240, 5%, 15%, 1)'
}
CheckBox.propTypes = {
  value: bool,
  onChange: func,
  id: string,
  name: string,
  width: number,
  height: number,
  color: string,
  size: number
}
