
import { keys, compose, map } from 'rambda'

import { theme } from './index'
import { View, Pre, Box, H2, Text } from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Usage/Theme',
  decorators: [addBase()]
}

export const ThemeObject = () => {
  console.log(theme)
  return (
    <View>
      <Pre>{JSON.stringify(theme, null, '  ')}</Pre>
    </View>
  )
}

const mapScale = compose(
  map(key => {
    return (
      <Box key={key} sx={{ my: 5 }}>
        <Text block size={5} sx={{ mb: 3 }}>{key}</Text>
        <Box
          sx={{
            bg: 'gray.100',
            width: '124px',
            height: '124px',
            boxShadow: key
          }}
        />
      </Box>
    )
  }),
  keys
)

export const Shadows = () => {
  return (
    <View>
      <H2>Shadows</H2>
      {
        mapScale(theme.shadows)
      }
    </View>
  )
}
