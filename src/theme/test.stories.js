
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { layout, color, border } from 'styled-system'

import { View, Text } from '../'
import { Surround } from '../storybook'

const Test = styled('div')`
  ${layout}
  ${color}
  ${border}
`

storiesOf('test', module)
  .add('Style Props', () => (
    <View>
      <Surround>
        <Test
          bg='rebeccapurple'
          color='white'
          width={6}
          borderRadius={3}
          borderColor='primary'
          borderWidth={3}
        >
          <Text color='white' p={2} block>I am a test</Text>
        </Test>
      </Surround>
    </View>
  ))
