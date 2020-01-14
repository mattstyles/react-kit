
import { theme } from './'
import { View, Pre } from '../'

export default {
  title: 'Usage|Theme'
}

export const ThemeObject = () => (
  <View>
    <Pre>{JSON.stringify(theme, null, '  ')}</Pre>
  </View>
)
