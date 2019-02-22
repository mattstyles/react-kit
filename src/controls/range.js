
import React, { useState } from 'react'
import { space, borders, width, height } from 'styled-system'
import styled from 'styled-components'
import { number, string, func, bool } from 'prop-types'

import { Box } from '../utility'

const onInteractionMove = (setter) =>
  ({ nativeEvent: { offsetX, offsetY },
    currentTarget: { offsetWidth, offsetHeight }
  }) => {
    setter([offsetX / offsetWidth, offsetY / offsetHeight])
  }
const onInteractionStart = (setter) => () => setter(true)
const onInteractionFinish = (setter) => () => setter(false)

const useInteraction = (initialPosition = [0, 0]) => {
  const [position, setPosition] = useState(initialPosition)
  const [isDown, setDown] = useState(false)
  const handlers = {
    onMouseDown: onInteractionStart(setDown),
    onMouseUp: onInteractionFinish(setDown),
    onMouseMove: onInteractionMove(setPosition)
    // @TODO touch events
  }

  return [position, isDown, handlers]
}

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
  const [value, setValue] = useState(initialValue / max)
  const [position, isDown, handlers] = useInteraction()

  if (isDown && position[0] !== value) {
    setValue(position[0])
    onChange(min + position[0] * (max - min))
  }

  return (
    <div className={className} style={{ background }} {...handlers}>
      <h1>{`Position: ${position[0].toFixed(2)}:${position[1].toFixed(2)}`}</h1>
      <h1>{`Value: ${value}`}</h1>
      <Box height={height} width={width} bg={color} />
    </div>
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
Range.defaultsProps = BaseRange.defaultProps
