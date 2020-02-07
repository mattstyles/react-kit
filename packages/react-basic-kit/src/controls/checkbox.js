
import React, { useState } from 'react'
import styled from 'styled-components'
import { sx } from 'react-kit-core'
import { func, bool, string, number } from 'prop-types'
import { css } from '@styled-system/css'

import { backgroundColour } from './common'
import { Icon } from '../icons/index'
import { Box } from '../layout/index'
import { noop } from '../utils'
import { focus, fill } from '../theme/mixins'
import { getTransition } from '../theme/utils'
import { tokens } from '../theme/index'
import { variants } from './checkbox.variants.js'

const StyledCheckbox = styled('input')(
  {
    cursor: 'inherit',
    margin: 0,
    opacity: 0,
    padding: 0
  },
  fill
)

const CheckMark = styled(Box)(
  props => css({
    opacity: props.isChecked ? 1 : 0,
    transition: getTransition('opacity', 'main'),
    'i, svg': {
      width: 'full',
      height: 'full'
    }
  })
)
CheckMark.defaultProps = {
  size: '100%'
}

// This makes the outline a square by using border
// Use a squircle icon instead, much nicer.
const Wrapper = styled(Box)(
  props => css({
    position: 'relative',
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition: t => `${getTransition('box-shadow', 'main')(t)}, ${getTransition('background', 'main')(t)}`,
    background: backgroundColour,
    border: 'none',
    borderRadius: tokens.layout.rounding,
    boxShadow: 'insetControl',
    ...props.isFocussed && focus
  }),
  variants,
  sx
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
  sx,
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

  return (
    <>
      <Wrapper
        {...more}
        isFocussed={isFocussed}
        isSelected={finalValue}
        sx={{
          width: size || width,
          height: size || height,
          ...sx || {}
        }}
      >
        <CheckMark
          color={color}
          isChecked={finalValue}
        >
          {children || <Icon icon='check' color={color} />}
        </CheckMark>
        <StyledCheckbox
          type='checkbox'
          aria-checked={finalValue}
          checked={finalValue}
          value={finalValue}
          onChange={onChangeCallback}
          onFocus={event => setIsFocussed(true)}
          onBlur={event => setIsFocussed(false)}
          id={id}
          name={name}
        />
      </Wrapper>
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
