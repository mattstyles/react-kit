
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { View, Text, Checkbox, Box } from '../index'
import { Surround } from '../storybook'

import { theme } from '../theme/index'
console.log(theme)

const SectionTitle = styled(Text)(
  css({
    display: 'block',
    mb: 1
  })
)

const StyledCheckBox = styled(Checkbox)(
  css({
    bg: 'gray.2',
    width: 8,
    height: 8
  })

)

const StyledLabel = styled('label')`
  margin-left: ${themeGet('space.2')}px;
  vertical-align: middle;
`

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

export const Basic = () => {
  return (
    <View>
      <Surround>
        <SectionTitle>Uncontrolled</SectionTitle>
        <Checkbox
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
        <Checkbox
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
          <Checkbox
            size={22}
            onChange={action('size 22 onChange: ')}
          />
        </Box>
        <Box m={2}>
          <Checkbox
            size={60}
            onChange={action('size 60 onChange: ')}
          />
        </Box>
      </Surround>
    </View>
  )
}
