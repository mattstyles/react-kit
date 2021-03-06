
import { action } from '@storybook/addon-actions'

import { View, Select, Label, Text, Spacer } from '../index'

import { addBase, Surround, SectionTitle } from '../storybook/index'

export default {
  title: 'Components/Controls/Select',
  decorators: [addBase()]
}

export const Comparison = () => (
  <View isPadded>
    <Surround>
      <SectionTitle>Standard Select</SectionTitle>
      <select name='Planets'>
        <option>Earth</option>
        <option>Arrakis</option>
        <option>LV-426</option>
      </select>
    </Surround>
    <Surround>
      <SectionTitle>Test dropdown alignment</SectionTitle>
      <Text>Chrome displays this kicked out to the left a little</Text>
      <Spacer py={1} />
      <select name='Planets' style={{ width: '100%' }}>
        <option>Earth</option>
        <option>Arrakis</option>
        <option>LV-426</option>
      </select>
    </Surround>
    <Surround>
      <SectionTitle>Standard Multiple Selects</SectionTitle>
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
      <SectionTitle>Standard Multiple Select</SectionTitle>
      <select multiple name='Name'>
        <option>Deckard</option>
        <option>Jayce</option>
        <option>Molly</option>
      </select>
    </Surround>
  </View>
)

export const Base = () => {
  return (
    <View>
      <Surround>
        <SectionTitle>Base</SectionTitle>
        <Select name='Planets' onChange={action('value')}>
          <option>Earth</option>
          <option>Arrakis</option>
          <option>LV-426</option>
        </Select>
        <Spacer py={1} />
        <Select name='Planets' disabled>
          <option>Earth</option>
          <option>Arrakis</option>
          <option>LV-426</option>
        </Select>
      </Surround>
      <Surround>
        <SectionTitle>With Label</SectionTitle>
        <Label htmlFor='jedi'>Jedi</Label>
        <Spacer pt={1} />
        <Select name='jedi' id='jedi'>
          <option>Yoda</option>
          <option>Luke</option>
          <option>Mace</option>
        </Select>
      </Surround>
      <Surround>
        <SectionTitle>Variant: Tight</SectionTitle>
        <Label htmlFor='jedi3'>Jedi</Label>
        <Spacer pt={1} />
        <Select name='jedi' id='jedi3' variant='tight'>
          <option>Yoda</option>
          <option>Luke</option>
          <option>Mace</option>
        </Select>
      </Surround>
      <Surround>
        <SectionTitle>Default selection, use value</SectionTitle>
        <Label htmlFor='jedi4'>Jedi</Label>
        <Spacer pt={1} />
        <Select name='jedi' id='jedi4' value='mace' onChange={action('value')}>
          <option value='yoda'>Yoda</option>
          <option value='luke'>Luke</option>
          <option value='mace'>Mace</option>
        </Select>
      </Surround>
    </View>
  )
}
