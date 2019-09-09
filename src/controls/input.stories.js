
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { View, Input, Text, Box } from '../'
import { Surround } from '../storybook'

const ControlledInput = () => {
  const [value, setValue] = useState('')
  return (
    <Input
      value={value}
      placeholder='Enter something:'
      onChange={e => setValue(e.target.value)}
    />
  )
}

storiesOf('Input', module)
  .add('Basics', () => (
    <View isPadded>
      <Surround>
        <Text>Input field</Text>
        <Box my={1}>
          <Input placeholder='This is a placeholder' />
        </Box>
      </Surround>
      <Surround>
        <Text>onChange, onSubmit</Text>
        <Box my={1}>
          <Input
            onChange={action('onChange: ')}
            onSubmit={action('onSubmit: ')}
          />
        </Box>
      </Surround>
      <Surround>
        <Text>Controlled input</Text>
        <Box my={1}>
          <ControlledInput />
        </Box>
      </Surround>
    </View>
  ))
