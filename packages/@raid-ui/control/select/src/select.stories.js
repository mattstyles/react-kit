
import { action } from '@storybook/addon-actions'

import { addBase } from '@internal/storybook'
import { Stack } from '@raid-ui/layout'
import { Label } from '@raid-ui/label'

import { Select } from './index'

export default {
  title: 'Components/Control/Select',
  decorators: [
    addBase()
  ]
}

export const Basic = () => (
  <Stack>
    <Select name='Planets' onChange={action('value')}>
      <option>Earth</option>
      <option>Arrakis</option>
      <option>LV-426</option>
    </Select>
    <Select disabled name='Planets' onChange={action('value')}>
      <option>Earth</option>
      <option>Arrakis</option>
      <option>LV-426</option>
    </Select>
    <Label htmlFor='jedi3'>Jedi</Label>
    <Select name='jedi' id='jedi3' variant='tight' onChange={action('value')}>
      <option>Yoda</option>
      <option>Luke</option>
      <option>Mace</option>
    </Select>
    <Label htmlFor='jedi4'>Jedi</Label>
    <Select name='jedi' id='jedi4' value='mace' onChange={action('value')}>
      <option value='yoda'>Yoda</option>
      <option value='luke'>Luke</option>
      <option value='mace'>Mace</option>
    </Select>
  </Stack>
)

export const Variants = () => (
  <Stack>
    <Select variant='standard' name='Planets' onChange={action('value')}>
      <option>Earth</option>
      <option>Arrakis</option>
      <option>LV-426</option>
    </Select>
    <Select variant='tight' name='Planets' onChange={action('value')}>
      <option>Earth</option>
      <option>Arrakis</option>
      <option>LV-426</option>
    </Select>
  </Stack>
)
