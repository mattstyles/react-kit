
import { theme } from './index'
import { View, Pre } from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Usage/Theme',
  decorators: [addBase()]
}

export const ThemeObject = () => (
  <View>
    <Pre>{JSON.stringify(theme, null, '  ')}</Pre>
  </View>
)
