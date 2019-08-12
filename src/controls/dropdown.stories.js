
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { View, Box, Text, utils } from '../'

const { getRangeTheme } = utils

const Surround = styled(Box)`
  background: ${getRangeTheme('palette.background', 0)};
  margin: ${getRangeTheme('space', 2)}px;
  padding: ${getRangeTheme('space', 2)}px;
  border-radius: ${getRangeTheme('borders', 1)}px;
`

storiesOf('Dropdown', module)
  .add('Comparison', () => (
    <View isPadded>
      <Surround>
        <Text display='block'>Standard Select</Text>
        <select name='Planets'>
          <option>Earth</option>
          <option>Arrakis</option>
          <option>LV-426</option>
        </select>
      </Surround>
      <Surround>
        <Text display='block'>Standard Multiple Selects</Text>
        <select name='Name'>
          <option>Yoda</option>
          <option>Aenea</option>
          <option>Muad Dib</option>
        </select>
        <select name='Planets'>
          <option>Coruscant</option>
          <option>Hyperion</option>
          <option>Vogsphere</option>
        </select>
      </Surround>
    </View>
  ))
