
import React, { useState } from 'react'
import { space, borders, width, height } from 'styled-system'
import styled from 'styled-components'
import { number, string, func, bool } from 'prop-types'

import { Box } from '../utility'
import { clampPerc } from '../utils'

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
}))`
  height: ${props => props.height}px;
  background: ${props => props.background};
`

const BaseRange = ({
  width,
  height,
  min,
  max,
  initialValue,
  onChange,
  background,
  color,
  isDiscrete,
  className
}) => {
  const [value, setValue] = useState((initialValue - min) / (max - min))
  const [[x], isActive, handlers] = useGlobalMouseMove([value, value])

  if (isActive && x !== value) {
    setValue(x)
    // @TODO isDiscrete
    const val = min + x * (max - min)
    onChange(isDiscrete ? val | 0 : val)
  }

  return (
    <Box className={className} bg={background} {...handlers}>
      <InnerBox height={height} width={value} bg={color} />
    </Box>
  )
}

BaseRange.propTypes = {
  width: number,
  height: number,
  min: number,
  max: number,
  initialValue: number,
  background: string,
  color: string,
  onChange: func,
  isDiscrete: bool,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...borders.propTypes
}

BaseRange.defaultProps = {
  width: 1,
  height: 16,
  min: 0,
  max: 1,
  initialValue: 0.5,
  background: 'rgba(0, 0, 0, 0)',
  color: 'rgba(255, 255, 255, 1)',
  onChange: function noop () {},
  isDiscrete: false
}

export const Range = styled(BaseRange)`
  ${space}
  ${width}
  ${height}
  ${borders}
  &:hover {
    cursor: ew-resize;
  }
`
Range.propTypes = BaseRange.propTypes
Range.defaultsProps = BaseRange.defaultProps
