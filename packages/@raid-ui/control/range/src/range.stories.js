
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { addBase } from '@internal/storybook'
import { Stack, Box, Flex } from '@raid-ui/layout'

import { Range } from './index'

export default {
  title: 'Components/Control/Range',
  decorators: [
    addBase()
  ]
}

const Value = styled(Box)(
  props => css({
    lineHeight: `${props.height}px`,
    width: '40px',
    textAlign: 'center',
    bg: 'background.800',
    color: 'white',
    fontWeight: 600,
    fontSize: 'xs',
    letterSpacing: 'narrow'
  })
)

const ValueSlider = props => {
  const { min, max, isDiscrete, height, initialValue } = props
  const [value, setValue] = useState(initialValue)

  return (
    <Flex row border='dark.100'>
      <Value height={height}>{value.toFixed(2)}</Value>
      <Range
        background='background.800'
        color='positive.500'
        onChange={setValue}
        min={min}
        max={max}
        initialValue={initialValue}
        isDiscrete={isDiscrete}
        width='100%'
        height={height}
      />
    </Flex>
  )
}
ValueSlider.defaultProps = {
  height: 24,
  initialValue: 0.5
}

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

export const Basic = () => (
  <Stack>
    <Range onChange={action('change')} />
    <Range
      onChange={action('change')}
      bg='background.200'
      width={12}
    />
    <Range
      onChange={action('change')}
      bg='dark.200'
      color='info.500'
    />
    <Range
      onChange={action('change')}
      bg='dark.200'
      color='positive.500'
      width={0.5}
    />
    <Range
      onChange={action('change')}
      bg='dark.200'
      color='critical.700'
      width={0.75}
      height={8}
    />
    <Range
      disabled
    />
  </Stack>
)

export const Values = () => (
  <Stack>
    <ValueSlider min={0} max={1} />
    <ValueSlider min={0} max={10} initialValue={4} />
    <ValueSlider min={2} max={16} initialValue={10} />
    <ValueSlider min={-5} max={5} initialValue={0} />
  </Stack>
)

export const Misc = () => (
  <Stack>
    <ColorRange bg='background.800' />
    <Range step={0.01} bg='background.800' onChange={action('change')} />
  </Stack>
)
