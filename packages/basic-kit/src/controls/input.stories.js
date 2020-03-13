
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import {
  View, Input, Text, Box, Label
} from '../index'

import { addBase, Surround, SectionTitle } from '../storybook/index'

export default {
  title: 'Components/Controls/Input',
  decorators: [addBase()]
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

export const Basics = () => (
  <View isPadded>
    <Surround>
      <Text>Input field</Text>
      <Box my={1}>
        <Input placeholder='This is a placeholder' />
      </Box>
    </Surround>
    <Surround>
      <Text>onChange</Text>
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
    <Surround>
      <Text>SubmitOnEnter</Text>
      <Box my={1}>
        <Input
          onChange={action('onChange: ')}
          onSubmit={action('onSubmit: ')}
          submitOnEnter
        />
      </Box>
    </Surround>
    <Surround>
      <Text>SubmitOnBlur</Text>
      <Box my={1}>
        <Input
          onChange={action('onChange: ')}
          onSubmit={action('onSubmit: ')}
          submitOnBlur
        />
      </Box>
    </Surround>
    <Surround>
      <Text>Pass props through</Text>
      <Box my={1}>
        <Input
          placeholder='Password field'
          type='password'
          onChange={action('onChange: ')}
        />
      </Box>
    </Surround>
    <Surround>
      <Text>Disabled state</Text>
      <Box my={1}>
        <Input
          disabled
        />
      </Box>
    </Surround>
    <Surround>
      <Text>With Label</Text>
      <Box my={2}>
        <Label htmlFor='name' sx={{ display: 'block', mb: 2 }}>Name</Label>
        <Input id='name' variant='flat' />
      </Box>
    </Surround>
    <Surround>
      <Text>onFocus handler</Text>
      <Box my={1}>
        <ResetOnFocus />
      </Box>
    </Surround>
  </View>
)

export const Variants = () => {
  return (
    <View>
      <Surround>
        <SectionTitle>Basic</SectionTitle>
        <Input />
      </Surround>
      <Surround>
        <SectionTitle>Flat</SectionTitle>
        <Input variant='flat' />
        <Input variant='flat' disabled sx={{ mx: 2 }} />
      </Surround>
      <Surround>
        <SectionTitle>Quiet</SectionTitle>
        <Input variant='quiet' />
        <Input variant='quiet' disabled sx={{ mx: 2 }} />
      </Surround>
      <Surround>
        <SectionTitle>Ghost</SectionTitle>
        <Input variant='ghost' placeholder='name' />
        <Input variant='ghost' disabled placeholder='name' sx={{ mx: 2 }} />
      </Surround>
      <Surround>
        <SectionTitle>Tight</SectionTitle>
        <Input variant='tight' placeholder='name' />
        <Input variant='tight' disabled placeholder='name' sx={{ mx: 2 }} />
      </Surround>
    </View>
  )
}
