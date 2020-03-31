
import { View, Select, Label } from '../index'

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
        <Select name='Planets'>
          <option>Earth</option>
          <option>Arrakis</option>
          <option>LV-426</option>
        </Select>
        <Select name='Planets' disabled sx={{ mt: 2 }}>
          <option>Earth</option>
          <option>Arrakis</option>
          <option>LV-426</option>
        </Select>
      </Surround>
      <Surround>
        <SectionTitle>With Label</SectionTitle>
        <Label htmlFor='jedi' sx={{ display: 'block', mb: 1 }}>Jedi</Label>
        <Select name='jedi' id='jedi'>
          <option>Yoda</option>
          <option>Luke</option>
          <option>Mace</option>
        </Select>
      </Surround>
      <Surround>
        <SectionTitle>Variant: Flat</SectionTitle>
        <Label htmlFor='jedi2' sx={{ display: 'block', mb: 1 }}>Jedi</Label>
        <Select name='jedi' id='jedi2' variant='flat'>
          <option>Yoda</option>
          <option>Luke</option>
          <option>Mace</option>
        </Select>
      </Surround>
      <Surround>
        <SectionTitle>Variant: Tight</SectionTitle>
        <Label htmlFor='jedi3' sx={{ display: 'block', mb: 1 }}>Jedi</Label>
        <Select name='jedi' id='jedi3' variant='tight'>
          <option>Yoda</option>
          <option>Luke</option>
          <option>Mace</option>
        </Select>
      </Surround>
    </View>
  )
}
