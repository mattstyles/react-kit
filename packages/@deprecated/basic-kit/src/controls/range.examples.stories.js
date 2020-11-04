
import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import {
  Range, Box, Flex, Text, H2, Screen
} from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Examples/Controls/Range',
  decorators: [
    addBase({
      Layout: Screen
    })
  ]
}

const Portal = styled(Screen).attrs(({
  hue,
  saturation,
  luminance
}) => ({
  style: {
    background: `hsl(${hue}, ${saturation}, ${luminance})`
  }
}))(
  css({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  })
)

const Card = styled(Box)(
  css({
    bg: 'white',
    boxShadow: 'hsla(0, 0%, 0%, 0.15) 0px 1px 2px 0px',
    borderRadius: 2
  })
)

const ColorRange = ({
  onChange,
  color,
  min,
  max,
  value,
  label
}) => (
  <Flex flexDirection='row' my={2}>
    <Flex flex={1} height={24}>
      <Text lineHeight='24px'>{label}</Text>
    </Flex>
    <Flex flex={3}>
      <Range
        initialValue={value}
        min={min}
        max={max}
        onChange={onChange}
        color={color}
        background='background.400'
        isDiscrete
        width='100%'
        height={24}
      />
    </Flex>

  </Flex>
)

export const HSLExample = () => {
  const [hue, setHue] = useState(140)
  const [saturation, setSaturation] = useState(50)
  const [luminance, setLuminance] = useState(50)

  return (
    <Portal
      hue={hue}
      luminance={`${luminance}%`}
      saturation={`${saturation}%`}
    >
      <Card sx={{ mt: 8, mx: 'auto', p: 3, width: ['90%', '24rem', '28rem'] }}>
        <H2 sx={{ mt: 3 }}>HSL Example</H2>
        <ColorRange
          label='Hue'
          onChange={setHue}
          min={0}
          max={360}
          value={hue}
          color={`hsl(${hue}, 50%, 50%)`}
        />
        <ColorRange
          label='Saturation'
          onChange={setSaturation}
          min={0}
          max={100}
          value={saturation}
          color={`hsl(${hue}, ${saturation}%, 50%)`}
        />
        <ColorRange
          label='Luminance'
          onChange={setLuminance}
          min={0}
          max={100}
          value={luminance}
          color={`hsl(${hue}, 50%, ${luminance}%)`}
        />
        <Text>{`hsl(${hue}, ${saturation}%, ${luminance}%)`}</Text>
      </Card>
    </Portal>
  )
}
