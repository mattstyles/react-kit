
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import { Range, View, Box, Text } from '../'
import { Surround, palette, gradient } from '../storybook'
import { HSLExample } from './range.examples.stories.js'

const Value = styled('span')`
  line-height: ${props => props.height || 16}px;
  width: 40px;
  text-align: center;
  background: ${palette.background[8]};
  color: ${palette.white};
  font-weight: 600;
  letter-spacing: 0.2px;
`

const ColorRange = props => {
  const [value, setValue] = useState(props.initialValue)

  return (
    <Range
      {...props}
      onChange={setValue}
      color={`rgb(${180 + (value * 75)}, 50, 90)`}
    />
  )
}
ColorRange.defaultProps = {
  initialValue: 0.5
}

const ValueSlider = props => {
  const { min, max, isDiscrete, height, initialValue } = props
  const [value, setValue] = useState(initialValue)

  return (
    <Box m={2} display='flex' border='solid 1px black'>
      <Value height={height}>{value.toFixed(2)}</Value>
      <Range
        background={palette.background[8]}
        color={palette.teal[4]}
        onChange={setValue}
        min={min}
        max={max}
        initialValue={initialValue}
        isDiscrete={isDiscrete}
        width='100%'
        height={height}
      />
    </Box>
  )
}
ValueSlider.defaultProps = {
  height: 24,
  initialValue: 0.5
}

storiesOf('Range', module)
  .add('Comparison', () => (
    <View>
      <Surround>
        <Text display='block'>Standard Input Range</Text>
        <input type='range' name='rangeslider' min='0' max='100' step='5' />
      </Surround>
      <Surround>
        <Text display='block'>Standard Progress Bar</Text>
        <progress max='100' value='33'>33/100</progress>
      </Surround>
      <Surround>
        <Text display='block'>Standard Meter</Text>
        <meter min='0' max='100' value='32' low='33' high='66' optimum='50'>32</meter>
      </Surround>
    </View>
  ))
  .add('Simple', () => (
    <View>
      <Box bg={palette.gray[9]} p='2' width={120}>
        <Range
          background={palette.gray[8]}
          color={palette.teal[5]}
          width={120}
        />
      </Box>
      <Box bg={palette.gray[9]} py={2} mt={1} width='100%'>
        <Range
          background={palette.gray[8]}
          color={palette.teal[5]}
          width='100%'
        />
      </Box>
    </View>
  ))
  .add('Sizes', () => (
    <View>
      <Surround>
        <Text block>Full width</Text>
        <Range
          background={palette.gray[8]}
          color={palette.violet[5]}
          width={1}
        />
      </Surround>
      <Surround>
        <Text block>Half width</Text>
        <Range
          background={palette.gray[8]}
          color={palette.violet[5]}
          width={0.5}
        />
      </Surround>
      <Surround>
        <Text block>Set Width (150px)</Text>
        <Range
          background={palette.gray[8]}
          color={palette.violet[5]}
          width={150}
        />
      </Surround>
      <Surround>
        <Text block>Set Height (24px)</Text>
        <Range
          background={palette.gray[8]}
          color={palette.violet[5]}
          width={150}
          height={24}
        />
      </Surround>
    </View>
  ))
  .add('Values', () => (
    <View>
      <ValueSlider min={0} max={1} />
      <ValueSlider min={0} max={10} initialValue={4} />
      <ValueSlider min={2} max={16} initialValue={10} />
      <ValueSlider min={-5} max={5} initialValue={0} />
    </View>
  ))
  .add('Misc', () => (
    <View>
      <Text block>Dynamically setting the color value</Text>
      <Box p={2} mb={3} bg={palette.gray[9]}>
        <ColorRange background={palette.gray[8]} />
      </Box>
      <Text block>Indented</Text>
      <Box pl={5} bg={palette.gray[7]}>
        <Box p={3} pl={5} mb={2} bg={palette.gray[9]}>
          <ColorRange background={palette.gray[8]} />
        </Box>
      </Box>
      <Text block>Linear Gradient</Text>
      <Box p={2} mb={3} bg={palette.gray[9]}>
        <Range
          color={gradient.sunset}
        />
      </Box>
      <Text block>Discrete</Text>
      <ValueSlider isDiscrete min={0} max={20} initialValue={5} />
    </View>
  ))
  .add('Example: HSL Sliders', () => (
    <HSLExample />
  ))
