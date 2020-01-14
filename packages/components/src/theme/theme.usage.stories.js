
import { theme } from './'
import { View, Code } from '../'

export default {
  title: 'Usage|Theme'
}

export const ThemeObject = () => (
  <View>
    <Code as='pre'>{JSON.stringify(theme, null, '  ')}</Code>
  </View>
)
