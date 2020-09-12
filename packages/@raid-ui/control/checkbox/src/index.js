
import React, { useState } from 'react'
import { func, bool, string, number } from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import cx from 'clsx'

import { sx, fill, getTransition } from '@raid-ui/core'
import { Check } from '@raid-ui/icons/Check'
import { Box } from '@raid-ui/container'
import { variants } from './checkbox.variants.js'

const noop = () => {}

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
    transition: getTransition('opacity', 'main')(props)
  }),
  {
    '> span svg, > span': {
      display: 'block'
    }
  }
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
    transition: `${getTransition('box-shadow', 'main')(props)}, ${getTransition('background', 'main')(props)}`,
    borderRadius: themeGet('tokens.layout.rounding')(props)
  }),
  variants,
  props => props.isFocussed && css({
    outline: 'none',
    zIndex: 1,
    boxShadow: theme => `inset 0px 1px 2px 1px hsla(0, 0%, 0%, 0), ${theme.shadows.focusRing}`
  }),
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
  sx,
  disabled,
  children,
  icon: Icon,
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
        className={cx({
          disabled: disabled,
          selected: finalValue
        })}
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
          <Icon size='full' color={color} />
        </CheckMark>
        <StyledCheckbox
          type='checkbox'
          disabled={disabled}
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

const defaultSize = 5

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
Checkbox.defaultProps = {
  onChange: noop,
  width: defaultSize,
  height: defaultSize,
  size: defaultSize,
  variant: 'standard',
  icon: Check
}
