
import React, { useState } from 'react'
import { space, borders } from 'styled-system'
import { css } from '@styled-system/css'
import styled from 'styled-components'
import { number, string, func, bool } from 'prop-types'

import { Box } from '../layout/box'
// import { clampPerc } from '../utils'
import { FocusRing } from './common'

// const setNewPosition = (target, event, setter) => {
//   const { clientX, clientY } = event
//   const { left, width, top, height } = target.getBoundingClientRect()
//   setter([
//     clampPerc((clientX - left) / width),
//     clampPerc((clientY - top) / height)
//   ])
// }

// const onMove = (target, setter) => (event) =>
//   setNewPosition(target, event, setter)

// const useGlobalMouseMove = (initialPosition = [0, 0]) => {
//   const [position, setPosition] = useState(initialPosition)
//   const [isActive, setActive] = useState(false)
//   const handlers = {
//     onMouseDown: event => {
//       const move = onMove(event.currentTarget, setPosition)
//       const fin = () => {
//         window.removeEventListener('mousemove', move)
//         window.removeEventListener('mouseup', fin)
//         setActive(false)
//       }
//
//       window.addEventListener('mousemove', move)
//       window.addEventListener('mouseup', fin)
//       setActive(true)
//       move(event.nativeEvent)
//     }
//   }
//
//   return [position, isActive, handlers]
// }

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
  }
)

export const Range = ({
  height,
  width,
  min,
  max,
  initialValue,
  onChange,
  background,
  bg,
  color,
  isDiscrete,
  sx,
  wx
}) => {
  const [value, setValue] = useState((initialValue - min) / (max - min))
  // handlers was previously spread on to the Box component, but this seems
  // unnecessary now as we can listen to the select onChange and map that value
  // based on the suppiled min-max
  // const [[x], isActive, handlers] = useGlobalMouseMove([value, value])
  const [isFocussed, setIsFocussed] = useState(false)

  const onChangeHandler = val => {
    setValue(val)
    const v = min + val * (max - min)
    onChange(isDiscrete ? v | 0 : v)
  }

  // I'm not entirely sure what this was here for. The global mouse move
  // causes issues with triggers setValue from another component though,
  // so removing but maintaining for now.
  // if (isActive && x !== value) {
  //   onChangeHandler(x)
  // }

  return (
    <Box
      position='relative'
      bg={bg || background}
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
        onFocus={event => {
          setIsFocussed(true)
        }}
        onBlur={event => {
          setIsFocussed(false)
        }}
        sx={sx}
      />
    </Box>
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
