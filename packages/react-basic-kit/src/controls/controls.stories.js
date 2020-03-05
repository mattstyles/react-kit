
import { FaCog } from 'react-icons/fa'

import { View, Select, Input, Button, Spread, H3, Spacer, P } from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Components/Controls',
  decorators: [addBase()]
}

export const Alignment = () => {
  return (
    <View>
      <H3>Common control elements should align horizontally</H3>
      <Spread>
        <Select name='Books' variant='flat' sx={{ mr: 2 }}>
          <option>Absolute Pandemonium</option>
          <option>Mythos</option>
          <option>Ubik</option>
        </Select>
        <Input variant='flat' placeholder='Authors' sx={{ mr: 2 }} />
        <Button variant='solid' sx={{ mr: 2 }}>Deploy</Button>
        <Button icon tight size='medium' variant='outline'><FaCog size={20} /></Button>
      </Spread>
      <Spacer py={4} />
      <H3>Tight variants should also align</H3>
      <Spread>
        <Select name='Books' variant='tight' sx={{ mr: 2 }}>
          <option>Absolute Pandemonium</option>
          <option>Mythos</option>
          <option>Ubik</option>
        </Select>
        <Input variant='tight' placeholder='Authors' sx={{ mr: 2 }} />
        <Button variant='solid' size='small' sx={{ mr: 2 }}>‍Deploy</Button>
        <Button icon tight size='small' variant='outline' sx={{ p: '6px' }}>
          <FaCog size={16} />
        </Button>
      </Spread>
      <P>These examples use react-icon icons, and the button will size around them. If you want an icon size that does not height the button as you desire then you need to manually apply changes.</P>
    </View>
  )
}
