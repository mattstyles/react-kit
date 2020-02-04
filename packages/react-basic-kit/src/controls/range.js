
import React, { useState } from 'react'
import { compose, color, space, borders, width, height } from 'styled-system'
import { css } from '@styled-system/css'
import styled from 'styled-components'
import { number, string, func, bool } from 'prop-types'

import { Box } from '../layout/box'
import { clampPerc } from '../utils'
import { FocusRing } from './common'

const setNewPosition = (target, event, setter) => {
  const { clientX, clientY } = event
  const { left, width, top, height } = target.getBoundingClientRect()
  setter([
    clampPerc((clientX - left) / width),
    clampPerc((clientY - top) / height)
  ])
}

const onMove = (target, setter) => (event) =>
  setNewPosition(target, event, setter)

const useGlobalMouseMove = (initialPosition = [0, 0]) => {
  const [position, setPosition] = useState(initialPosition)
  const [isActive, setActive] = useState(false)
  const handlers = {
    onMouseDown: event => {
      const move = onMove(event.currentTarget, setPosition)
      const fin = () => {
        window.removeEventListener('mousemove', move)
        window.removeEventListener('mouseup', fin)
        setActive(false)
      }

      window.addEventListener('mousemove', move)
      window.addEventListener('mouseup', fin)
      setActive(true)
      move(event.nativeEvent)
    }
  }

  return [position, isActive, handlers]
}

const InnerBox = styled('div').attrs(({ width, bg }) => ({
  style: {
    width: `${width * 100}%`,
    background: bg
  }
}))(
  props => css({
    height: props.height,
    bg: props.background || 'primary'
  })
)

const StyledInput = styled('input')(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    width: '100%',
    '&:active': {
      cursor: 'ew-resize'
    }
  }
)

// @TODO sort out blur & focus
const BaseRange = ({
  height,
  width,
  min,
  max,
  initialValue,
  onChange,
  background,
  color,
  isDiscrete,
  sx,
  wx
}) => {
  const [value, setValue] = useState((initialValue - min) / (max - min))
  const [[x], isActive, handlers] = useGlobalMouseMove([value, value])
  const [isFocussed, setIsFocussed] = useState(false)

  const onChangeHandler = val => {
    setValue(val)
    const v = min + val * (max - min)
    onChange(isDiscrete ? v | 0 : v)
  }

  if (isActive && x !== value) {
    onChangeHandler(x)
  }

  return (
    <Box
      position='relative'
      bg={background}
      {...handlers}
      sx={wx}
      width={width === 1 ? '100%' : width}
    >
      <FocusRing isFocussed={isFocussed} />
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
        step={isDiscrete ? 1 / (max - min) : 0.1}
        onChange={event => {
          onChangeHandler(event.target.value)
        }}
        onFocus={event => setIsFocussed(true)}
        onBlur={event => {
          setIsFocussed(false)
        }}
        sx={sx}
      />
    </Box>
  )
}

BaseRange.propTypes = {
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

BaseRange.defaultProps = {
  height: 16,
  min: 0,
  max: 1,
  initialValue: 0.5,
  background: 'rgba(0, 0, 0, 0)',
  onChange: function noop () {},
  isDiscrete: false
}

export const Range = styled(BaseRange)(
  compose(
    space,
    width,
    height,
    borders,
    color
  )
)
Range.propTypes = BaseRange.propTypes
Range.defaultsProps = BaseRange.defaultProps
