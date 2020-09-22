
import { ThemeProvider } from 'styled-components'

import { theme } from '@raid-ui/theme'
import { Reset } from '@raid-ui/reset'
import { View, Stack } from '@raid-ui/layout'
import { Pre, Text } from '@raid-ui/type'

import { extend } from './'

export default {
  title: 'Components/Core/Theme'
}

export const Overview = () => (
  <ThemeProvider theme={theme}>
    <Reset />
    <View>
      <Text>Base theme specification</Text>
      <Pre>{JSON.stringify(theme, null, '  ')}</Pre>
    </View>
  </ThemeProvider>
)

const dark = extend(theme)({
  colors: {
    primary: 'rebeccapurple'
  }
})

export const Extended = () => (
  <ThemeProvider theme={theme}>
    <Reset />
    <View>
      <Stack>
        <Text color='primary'>Base primary colour</Text>
        <ThemeProvider theme={dark}>
          <Text color='primary'>New theme primary colour</Text>
        </ThemeProvider>
      </Stack>
    </View>
  </ThemeProvider>
)
