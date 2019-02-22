
import React, { useState } from 'react'
import { space, borders, width, height } from 'styled-system'
import styled from 'styled-components'
import { number, string, func, bool } from 'prop-types'

import { Box } from '../utility'

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
  const [value, setValue] = useState(initialValue)

  return (
    <div className={className} style={{ background }}>
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
  onChange: func.isRequired,
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
