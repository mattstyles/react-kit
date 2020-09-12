
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import { addBase } from '@internal/storybook'
import { Stack, Box } from '@raid-ui/layout'
import { Heart } from '@raid-ui/icons/Heart'
import { Label } from '@raid-ui/label'
import { Text } from '@raid-ui/text'

import { Checkbox } from './index'

export default {
  title: 'Components/Control/Checkbox',
  decorators: [
    addBase()
  ]
}

const ControlledCheckbox = ({
  onChange
}) => {
  const [value, setValue] = useState(false)

  return (
    <Stack>
      <Label>
        <Checkbox
          value={value}
          onChange={changeValue => {
            onChange(changeValue)
            setValue(changeValue)
          }}
          mr={2}
        />
        Large Text
      </Label>
      <Text size={value ? 5 : 3}>Some text</Text>
    </Stack>
  )
}

export const Basic = () => (
  <Stack>
    <Checkbox onChange={action('change')} />
    <Checkbox onChange={action('change')} disabled />
    <Box>
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
  </Stack>
)

export const Variants = () => (
  <Stack>
    <Checkbox onChange={action('change')} icon={Heart}>
      Checkbox with heart icon
    </Checkbox>
    <Checkbox variant='standard' onChange={action('change')}>
      Standard variant
    </Checkbox>
    <Checkbox variant='primary' onChange={action('change')}>
      Primary variant
    </Checkbox>
  </Stack>
)

export const Controlled = () => (
  <ControlledCheckbox onChange={action('change')} />
)
