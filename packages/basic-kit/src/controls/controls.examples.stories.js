
import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { addBase } from '../storybook/index'
import {
  View, Pane, Screen,
  Label, Input, Select,
  Text, List, ListItem
} from '../'

export default {
  title: 'Examples/Controls',
  decorators: [
    addBase({
      Layout: ({ children }) => <Screen sx={{ bg: 'gray.800' }}>{children}</Screen>
    })
  ]
}

const tokens = {
  padding: 4
}

const Controls = styled(Pane)(
  css({
    flex: '0 0 16rem',
    bg: 'gray.100',
    height: '100vh'
  })
)

const ControlList = ({ children, heading }) => (
  <List styleType='none' inset={false} sx={{ mt: 0 }}>
    <Text
      as='div'
      sx={{
        bg: 'gray.200',
        px: tokens.padding,
        py: 2,
        mt: 0,
        mb: 2
      }}
    >
      {heading}
    </Text>
    {children}
  </List>
)

const ControlItem = ({ children, label, labelFor }) => (
  <ListItem sx={{ px: tokens.padding, display: 'flex', alignItems: 'center', my: 2 }}>
    <Label htmlFor={labelFor} sx={{ width: 10 }}>{label}</Label>
    {children}
  </ListItem>
)

export const ControlExample = () => {
  const [textString, setTextString] = useState('Some text')
  const [colour, setColour] = useState('gray.100')
  const [size, setSize] = useState(7)

  return (
    <View>
      <Pane split>
        <Pane sx={{ p: tokens.padding }}>
          <Text
            size={size}
            sx={{
              color: colour
            }}
          >
            {textString}
          </Text>
        </Pane>
        <Controls>
          <ControlList heading='Text Controls'>
            <ControlItem labelFor='text' label='Text'>
              <Input
                id='text'
                variant='tight'
                value={textString}
                onChange={e => setTextString(e)}
              />
            </ControlItem>
            <ControlItem labelFor='colour' label='Colour'>
              <Input
                id='colour'
                variant='tight'
                value={colour}
                onChange={setColour}
              />
            </ControlItem>
            <ControlItem labelFor='size' label='Size'>
              <Select
                id='colour'
                variant='tight'
                value={size}
                onChange={setSize}
                sx={{ flex: 1 }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
              </Select>
            </ControlItem>
          </ControlList>
        </Controls>
      </Pane>
    </View>
  )
}
