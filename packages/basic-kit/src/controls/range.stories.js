
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { Range, View, Box, Text, theme } from '../index'

import { addBase, Surround } from '../storybook/index'

export default {
  title: 'Components/Controls/Range',
  decorators: [
    addBase()
  ]
}

const Value = styled(Box)(
  props => css({
    lineHeight: `${props.height}px`,
    width: '40px',
    textAlign: 'center',
    bg: 'gray.800',
    color: 'white',
    fontWeight: 600,
    fontSize: 'xs',
    letterSpacing: 'narrow'
  })
)

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
  const { min, max, isDiscrete, height, initialValue, sx } = props
  const [value, setValue] = useState(initialValue)

  return (
    <Box display='flex' border='solid 1px black' sx={sx}>
      <Value height={height}>{value.toFixed(2)}</Value>
      <Range
        background={theme.colors.gray[800]}
        color={theme.colors.green[500]}
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

export const Comparison = () => (
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
)
export const Simple = () => (
  <View>
    <Box>
      <Range
        onChange={action('Changing')}
      />
    </Box>
    <Box sx={{ bg: theme.colors.gray[900], p: 2, mt: 1, width: 120 }}>
      <Range
        background={theme.colors.gray[800]}
        color={theme.colors.blue[600]}
        width={120}
      />
    </Box>
    <Box sx={{ bg: theme.colors.gray[900], p: 2, mt: 1, width: '100%' }}>
      <Range
        background='hsl(0, 0, 97%)'
        color={theme.colors.blue[600]}
        width='100%'
      />
    </Box>
  </View>
)

export const Sizes = () => (
  <View>
    <Surround>
      <Text block>Full width</Text>
      <Range
        background={theme.colors.gray[800]}
        color={theme.colors.red[600]}
        width={1}
      />
    </Surround>
    <Surround>
      <Text block>Half width</Text>
      <Range
        background={theme.colors.gray[800]}
        color={theme.colors.red[600]}
        width={0.5}
      />
    </Surround>
    <Surround>
      <Text block>Set Width (150px)</Text>
      <Range
        background={theme.colors.gray[800]}
        color={theme.colors.red[600]}
        width={150}
      />
    </Surround>
    <Surround>
      <Text block>Set Height (24px)</Text>
      <Range
        background={theme.colors.gray[800]}
        color={theme.colors.red[600]}
        width={150}
        height={24}
      />
    </Surround>
  </View>
)

export const Values = () => (
  <View>
    <ValueSlider min={0} max={1} sx={{ mb: 2 }} />
    <ValueSlider min={0} max={10} initialValue={4} sx={{ mb: 2 }} />
    <ValueSlider min={2} max={16} initialValue={10} sx={{ mb: 2 }} />
    <ValueSlider min={-5} max={5} initialValue={0} sx={{ mb: 2 }} />
  </View>
)

export const Misc = () => (
  <View>
    <Text block>Dynamically setting the color value</Text>
    <Box p={2} mb={3} bg={theme.colors.gray[900]}>
      <ColorRange background={theme.colors.gray[800]} />
    </Box>
    <Text block>Indented</Text>
    <Box pl={5} bg={theme.colors.gray[700]}>
      <Box p={3} pl={5} mb={2} bg={theme.colors.gray[900]}>
        <ColorRange background={theme.colors.gray[800]} />
      </Box>
    </Box>
    <Text block>Linear Gradient</Text>
    <Box p={2} mb={3} bg={theme.colors.gray[900]}>
      <Range
        color={`linear-gradient(30deg, ${theme.colors.blue[400]}, ${theme.colors.red[700]} 75%)`}
      />
    </Box>
    <Text block>Discrete</Text>
    <ValueSlider isDiscrete min={0} max={20} initialValue={5} />
  </View>
)
// .add('Example: HSL Sliders', () => (
//   <HSLExample />
// ))
