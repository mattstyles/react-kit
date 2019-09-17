
import { storiesOf } from '@storybook/react'

import { theme } from './'
import { View, Code } from '../'

storiesOf('Theme', module)
  .add('Theme Object', () => (
    <View xscroll>
      <Code as='pre'>{JSON.stringify(theme, null, '  ')}</Code>
    </View>
  ))
