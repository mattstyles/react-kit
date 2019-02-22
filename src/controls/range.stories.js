
import { storiesOf } from '@storybook/react'
import oc from 'open-color'

import { Range, View, Box } from '../'

storiesOf('range', module)
  .add('Simple', () => (
    <View>
      <Box bg={oc.gray[8]} p='2' width={120}>
        <Range
          background={oc.gray[7]}
          color={oc.orange[6]}
          onChange={() => console.log('changing')}
          width={120}
        />
      </Box>
    </View>
  ))
