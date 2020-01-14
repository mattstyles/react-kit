
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { View, Text, Box, Checkbox, Label } from '../index'
import { Surround } from '../storybook'

import { theme } from '../theme/index'

const SectionTitle = styled(Text)(
  css({
    display: 'block',
    mb: 2
  })
)

const StyledCheckBox = ({
  onChange
}) => {
  const [value, setValue] = useState(false)

  return (
    <Checkbox
      value={value}
      onChange={changeValue => {
        onChange(changeValue)
        setValue(changeValue)
      }}
      bg={value ? 'blue.600' : 'gray.200'}
      color='white'
      size={8}
      border={`4px solid ${theme.colors.blue[600]}`}
    />
  )
}

const ControlledCheckBox = ({
  onChange
}) => {
  const [value, setValue] = useState(true)

  return (
    <Checkbox
      value={value}
      onChange={changeValue => {
        onChange(changeValue)
        setValue(changeValue)
      }}
    />
  )
}

export default {
  title: 'Components|Controls/Checkbox'
}

export const Solo = () => (
  <Box p={8}>
    <Checkbox
      onChange={action('Checkbox value')}
    />
  </Box>
)

export const Basic = () => {
  return (
    <View>
      <Surround>
        <SectionTitle>Uncontrolled</SectionTitle>
        <Checkbox
          onChange={action('Uncontrolled change')}
        />
      </Surround>
      <Surround>
        <SectionTitle>Controlled</SectionTitle>
        <ControlledCheckBox
          onChange={action('controlled onChange: ')}
        />
      </Surround>
      <Surround>
        <SectionTitle>Custom styled checkbox</SectionTitle>
        <StyledCheckBox
          onChange={action('custom styled onChange: ')}
        />
      </Surround>
      <Surround>
        <SectionTitle>With label</SectionTitle>
        <Box mb={2}>
          <Checkbox onChange={action('with label:')}>
            Label as a child
          </Checkbox>
        </Box>
        <Box mb={2}>
          <Checkbox
            id='withLabel'
            size={5}
            onChange={action('with label onChange: ')}
          />
          <Label htmlFor='withLabel' pl={2}>Label elsewhere in the DOM</Label>
        </Box>
        <Box>
          <Label>
            <Checkbox size={4} mr={2} onChange={action('wrapped in label:')} />
            Label wrapped around
          </Label>
        </Box>
      </Surround>
      <Surround>
        <SectionTitle>Sizes, squares are usually best</SectionTitle>
        <Box m={2}>
          <Checkbox
            size={4}
            onChange={action('size 2 onChange: ')}
          />
        </Box>
        <Box m={2}>
          <Checkbox
            size={10}
            onChange={action('size 10 onChange: ')}
          />
        </Box>
      </Surround>
    </View>
  )
}
