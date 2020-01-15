
import { View, Text } from '../index'

import { addBase, Surround } from '../storybook/index'

export default {
  title: 'Components|Controls/Dropdown',
  decorators: [addBase()]
}

export const Comparison = () => (
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
    <Surround>
      <Text display='block'>Standard Multiple Select</Text>
      <select multiple name='Name'>
        <option>Deckard</option>
        <option>Jayce</option>
        <option>Molly</option>
      </select>
    </Surround>
  </View>
)
