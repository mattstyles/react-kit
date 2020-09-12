
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import { addBase } from '@internal/storybook'
import { Stack, Box, Spacer } from '@raid-ui/layout'
import { Label } from '@raid-ui/label'
import { Text } from '@raid-ui/text'

import { Input } from './index'

export default {
  title: 'Components/Control/Input',
  decorators: [
    addBase()
  ]
}

const ControlledInput = (props) => {
  const [value, setValue] = useState('')
  return (
    <Input
      value={value}
      placeholder='Enter something:'
      onChange={e => setValue(e)}
      onSubmit={action('onSubmit: ')}
      submitOnEnter
    />
  )
}

const ResetOnFocus = props => {
  const [value, setValue] = useState('')
  return (
    <Input
      value={value}
      onFocus={e => setValue('')}
      onChange={e => setValue(e)}
      onSubmit={action('onSubmit: ')}
      submitOnEnter
    />
  )
}

export const Basic = () => (
  <Stack>
    <Box><Input /></Box>
    <Box><Input disabled /></Box>
    <Box><Input placeholder='Placeholder text' /></Box>
    <Box><Input placeholder='Placeholder text' disabled /></Box>
    <Box><Input placeholder='Password' type='password' /></Box>
    <Box>
      <Label htmlFor='name'>With label</Label>
      <Spacer py={1} />
      <Input id='name' />
    </Box>
    <Text as='h3' size={6}>Submitting</Text>
    <Text>Submit needs to be specified a trigger, the following will register changes but there is no default submit action</Text>
    <Box>
      <Input
        onChange={action('change')}
        onSubmit={action('submit')}
      />
    </Box>
    <Text>submitOnEnter</Text>
    <Box>
      <Input
        onChange={action('change')}
        onSubmit={action('submit')}
        submitOnEnter
      />
    </Box>
    <Text>submitOnBlur</Text>
    <Box>
      <Input
        onChange={action('change')}
        onSubmit={action('submit')}
        submitOnBlur
      />
    </Box>
    <Text>clearOnSubmit</Text>
    <Box>
      <Input
        onChange={action('change')}
        onSubmit={action('submit')}
        clearOnSubmit
        submitOnEnter
      />
    </Box>
  </Stack>
)

export const Variants = () => (
  <Stack>
    <Box><Input variant='standard' placeholder='standard' /></Box>
    <Box><Input variant='ghost' placeholder='ghost' /></Box>
    <Box><Input variant='tight' placeholder='tight' /></Box>
  </Stack>
)

export const Controlled = () => (
  <Stack>
    <Text>Controlled input</Text>
    <Box><ControlledInput /></Box>
    <Text>Controlled input with reset on focus</Text>
    <Box><ResetOnFocus /></Box>
  </Stack>
)
