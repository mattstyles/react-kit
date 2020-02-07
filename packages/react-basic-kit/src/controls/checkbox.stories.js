
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import {
  GiFlame
} from 'react-icons/gi'

import { addBase, Surround, SectionTitle } from '../storybook/index'

import {
  View, Box, Checkbox, Label, theme, Icon
} from '../index'

export default {
  title: 'Components/Controls/Checkbox',
  decorators: [addBase()]
}

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
      color='white'
      size={8}
      sx={{
        boxShadow: 'none',
        bg: value ? 'blue.600' : 'white',
        border: `2px solid ${value ? theme.colors.blue[600] : theme.colors.gray[400]}`
      }}
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
        <Box my={2}>
          <Checkbox
            size={4}
            onChange={action('size 2 onChange: ')}
          />
        </Box>
        <Box my={2}>
          <Checkbox
            size={10}
            onChange={action('size 10 onChange: ')}
          />
        </Box>
      </Surround>
      <Surround>
        <SectionTitle>Variant icons</SectionTitle>
        <Box sx={{ my: 2 }}>
          <Checkbox size={8} sx={{ mr: 2 }}>
            <Icon icon='chevron' color='red.400' />
          </Checkbox>
          <Checkbox size={8}>
            <Box p={2} size='full'>
              <GiFlame padding='4px' />
            </Box>
          </Checkbox>
        </Box>
      </Surround>
    </View>
  )
}

export const variants = () => {
  return (
    <View>
      <Surround>
        <SectionTitle>Basic</SectionTitle>
        <Checkbox />
      </Surround>
      <Surround>
        <SectionTitle>Flat</SectionTitle>
        <Checkbox variant='flat' />
        <Checkbox variant='flat' disabled sx={{ mx: 2 }} />
      </Surround>
      <Surround>
        <SectionTitle>Primary</SectionTitle>
        <Checkbox variant='primary' />
        <Checkbox variant='primary' disabled sx={{ mx: 2 }} />
      </Surround>
    </View>
  )
}
