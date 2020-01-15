
import styled from 'styled-components'
import { layout, color, border } from 'styled-system'

import { View, Text } from '../index'
import { Surround, addBase } from './index'

const Test = styled('div')(
  layout,
  color,
  border
)

export default {
  title: 'Components|test',
  decorators: [
    addBase()
  ]
}

export const StyleProps = () => (
  <View>
    <Surround>
      <Test
        bg='rebeccapurple'
        color='white'
        width='200px'
        borderRadius={3}
        borderColor='primary'
        borderWidth={3}
      >
        <Text as='div' color='white' p={2} block>I am a test</Text>
      </Test>
    </Surround>
  </View>
)
