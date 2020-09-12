
import React, { useState } from 'react'
import { space, borders } from 'styled-system'
import { css } from '@styled-system/css'
import styled from 'styled-components'
import { number, string, func, bool } from 'prop-types'

import { Box } from '@raid-ui/container'
import { focusStyle, getTransition } from '@raid-ui/core'

const InnerBox = styled('div').attrs(({ width, bg }) => ({
  style: {
    width: `${width * 100}%`,
    background: bg
  }
}))(
  props => css({
    height: props.height,
    bg: props.bg || 'primary'
  })
)

const StyledInput = styled('input')(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    width: '100%',
    zIndex: 11,
    margin: 0,
    '&:active': {
      cursor: 'ew-resize'
    }
  },
  props => css({
    height: props.height || 'auto'
  })
)

const Wrapper = styled(Box)(
  props => props.isFocussed && focusStyle,
  props => css({
    transition: getTransition('box-shadow', 'main')(props)
  })
)

export const Range = ({
  height,
  width,
  min,
  max,
  step,
  initialValue,
  onChange,
  background,
  bg,
  color,
  isDiscrete,
  sx
}) => {
  const [value, setValue] = useState((initialValue - min) / (max - min))
  const [isFocussed, setIsFocussed] = useState(false)

  const onChangeHandler = val => {
    setValue(val)
    const v = min + val * (max - min)
    onChange(isDiscrete ? v | 0 : v)
  }

  return (
    <Wrapper
      position='relative'
      bg={bg || background}
      width={width === 1 ? '100%' : width}
      isFocussed={isFocussed}
    >
      <InnerBox
        height={height}
        width={value}
        bg={color}
      />
      <StyledInput
        type='range'
        min={0}
        max={1}
        value={value}
        height={height}
        step={isDiscrete ? 1 / (max - min) : step || 0.1}
        onChange={event => {
          onChangeHandler(event.target.value)
        }}
        onFocus={event => {
          setIsFocussed(true)
        }}
        onBlur={event => {
          setIsFocussed(false)
        }}
        sx={sx}
      />
    </Wrapper>
  )
}

Range.propTypes = {
  height: number,
  min: number,
  max: number,
  initialValue: number,
  background: string,
  color: string,
  onChange: func,
  isDiscrete: bool,
  ...space.propTypes,
  ...borders.propTypes
}

Range.defaultProps = {
  height: 16,
  min: 0,
  max: 1,
  initialValue: 0.5,
  background: 'rgba(0, 0, 0, 0)',
  onChange: function noop () {},
  isDiscrete: false
}
