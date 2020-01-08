
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { View, Text, CheckBox, Box } from '../'
import { Surround } from '../storybook'

const SectionTitle = styled(Text)`
  display: block;
  margin-bottom: ${themeGet('space.1')}px;
`

const StyledCheckBox = styled(CheckBox)`
  background: ${themeGet('palette.background.2')};
  width: 44px;
  height: 44px;
`

const StyledLabel = styled('label')`
  margin-left: ${themeGet('space.2')}px;
  vertical-align: middle;
`

const ControlledCheckBox = ({
  onChange
}) => {
  const [value, setValue] = useState(true)

  return (
    <CheckBox
      value={value}
      onChange={changeValue => {
        onChange(changeValue)
        setValue(changeValue)
      }}
    />
  )
}

storiesOf('CheckBox', module)
  .add('Basic', () => (
    <View isPadded>
      <Surround>
        <SectionTitle>Uncontrolled</SectionTitle>
        <CheckBox
          onChange={action('uncontrolled onChange: ')}
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
        <CheckBox
          id='withLabel'
          height={22}
          width={22}
          onChange={action('with label onChange: ')}
        />
        <StyledLabel htmlFor='withLabel'>
          <Text>This is a label for the checkbox</Text>
        </StyledLabel>
      </Surround>
      <Surround>
        <SectionTitle>Sizes, squares are usually best</SectionTitle>
        <Box m={2}>
          <CheckBox
            size={22}
            onChange={action('size 22 onChange: ')}
          />
        </Box>
        <Box m={2}>
          <CheckBox
            size={60}
            onChange={action('size 60 onChange: ')}
          />
        </Box>
      </Surround>
    </View>
  ))
