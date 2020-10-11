
import { action } from '@storybook/addon-actions'

import { addBase } from '@internal/storybook'
import { Spacer, Flex, Stack, Grid } from '@raid-ui/layout'
import { Text } from '@raid-ui/type'

import {
  Button,
  ButtonGroup,
  Input,
  Select,
  Checkbox,
  Range,
  Label
} from './'

export default {
  title: 'Components/Control/Controls',
  decorators: [
    addBase()
  ]
}

export const Sink = () => {
  return (
    <Stack space={4}>
      <Text as='h2'>Create Character</Text>
      <Flex row>
        <Flex flex={1}>
          <Label>
            <Text block>Name</Text>
            <Input placeholder='name' sx={{ width: 'full' }} />
          </Label>
        </Flex>
        <Spacer px={2} />
        <Flex flex={1}>
          <Label>
            <Text block>Class</Text>
            <Select name='Class' onChange={action('class change')}>
              <option value='archon'>Archon</option>
              <option value='consul'>Consul</option>
              <option value='diplomat'>Diplomat</option>
            </Select>
          </Label>
        </Flex>
      </Flex>
      <Stack space={1}>
        <Flex row>
          <Label>
            <Checkbox variant='primary' onChange={action('perma death')} />
            <Spacer px={1} display='inline' />
            <Text>Perma death</Text>
          </Label>
          <Flex flex={1} />
        </Flex>
        <Flex row>
          <Label>
            <Checkbox variant='primary' onChange={action('Harcore mode')} />
            <Spacer px={1} display='inline' />
            <Text>Hard core mode</Text>
          </Label>
          <Flex flex={1} />
        </Flex>
      </Stack>
      <Stack space={1}>
        <Grid
          gridTemplateColumns='fit-content(100px) 1fr'
          gridColumnGap={4}
          gridRowGap={1}
          alignItems='center'
        >
          <Label htmlFor='stat-charisma'>
            <Text>Charisma</Text>
          </Label>
          <Range
            id='stat-charisma'
            onChange={action('charisma')}
            bg='background.300'
            color='primary'
          />
          <Label htmlFor='stat-persuasion'>
            <Text>Persuasion</Text>
          </Label>
          <Range
            id='stat-persuasion'
            onChange={action('persuasion')}
            bg='background.300'
            color='primary'
          />
          <Label htmlFor='stat-ambition'>
            <Text>Ambition</Text>
          </Label>
          <Range
            id='stat-ambition'
            onChange={action('ambition')}
            bg='background.300'
            color='primary'
          />
        </Grid>
      </Stack>
      <Spacer py={1} />
      <Flex row>
        <Flex flex={1} />
        <ButtonGroup>
          <Button onClick={action('cancel')}>Cancel</Button>
          <Button colour='positive' onClick={action('submit')}>Create</Button>
        </ButtonGroup>
      </Flex>
    </Stack>
  )
}
