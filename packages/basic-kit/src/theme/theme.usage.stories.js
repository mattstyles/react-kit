
import { keys, compose, map } from 'rambda'

import { theme } from './index'
import { View, Box, Pre, H2, Text } from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Usage/Theme',
  decorators: [
    addBase()
  ]
}

export const ThemeObject = () => {
  console.log(theme)
  return (
    <View>
      <Pre sx={{ m: 3 }}>{JSON.stringify(theme, null, '  ')}</Pre>
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
      <Box>
        {
          Array(6).fill(0).map((_, i) => i).map(depth => {
            return (
              <Box
                key={`shadow${depth}`}
                sx={{
                  display: 'inline-block',
                  borderRadius: 3,
                  bg: 'gray.100',
                  size: 26 + (depth * 14),
                  m: 2,
                  boxShadow: depth,
                  '&:first-child': {
                    ml: 0
                  }
                }}
              />
            )
          })
        }
      </Box>
      {
        mapScale(theme.shadows)
      }
      <Text block>Depth parameter does not work, unfortunately.</Text>
      <Box depth={4} sx={{ size: 100, bg: 'gray.100', depth: 4 }} />
    </View>
  )
}
