
import { ThemeProvider } from 'styled-components'
import { Reset } from '@raid-ui/reset'
import {
  H1, Text,
  Button, Card, Badge,
  View, Box, Stack, Spacer, Grid
} from '@raid/kit'
import { theme as base } from '@raid-ui/theme'
import { Markdown } from '@raid-ui/markdown'

import { theme } from './'

export default {
  title: 'Themes'
}

const text = `
# Outrun theme

> This is a blockquote

<Stack row tight>
  <Badge>Meta</Badge>
  <Badge>Tag</Badge>
  <Badge variant='primary'>Outrun</Badge>
</Stack>

Some body copy with a \`code\` element within it.
`

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Reset sx={{ body: { bg: 'background.75' } }} />
      {children}
    </ThemeProvider>
  )
}

export const Outrun = () => {
  return (
    <App>
      <View isPadded>
        <H1>Outrun theme</H1>
        <Stack row>
          <Button colour='positive'>Positive</Button>
          <Button colour='critical'>Critical</Button>
          <Button colour='info'>Info</Button>
          <Button colour='warning'>Warning</Button>
        </Stack>
        <Spacer py={4} />
        <Grid
          gridTemplateColumns='repeat(3, auto)'
          gridGap={2}
        >
          <Card>
            <Text>One</Text>
          </Card>
          <Card>
            <Text>Two</Text>
          </Card>
          <Card>
            <Text>Three</Text>
          </Card>
          <Card>
            <Text>Four</Text>
          </Card>
          <Card>
            <Text>Five</Text>
          </Card>
          <Card>
            <Text>Six</Text>
          </Card>
        </Grid>
        <Spacer py={4} />
        <Box width='full' mx='auto' maxWidth='48rem'>
          <Markdown elements={{ Badge, Stack }}>{text}</Markdown>
        </Box>
      </View>
    </App>
  )
}

const map = (obj, fn) => {
  const output = []
  for (const key in obj) {
    output.push(fn(obj[key]))
  }
  return output
}

const createColorStrip = color => {
  return (
    <Box key={color} bg={color} py={3} />
  )
}

const bgColors = map(theme.colors.background, createColorStrip)
const baseColors = map(base.colors.background, createColorStrip)
const baseColorsReversed = [...baseColors].reverse()

export const Colors = () => {
  return (
    <App>
      <View isPadded>
        <Spacer py={2} />
        <Stack row>
          <Box>{baseColors}</Box>
          <Box>{baseColorsReversed}</Box>
          <Box>{bgColors}</Box>
        </Stack>
      </View>
    </App>
  )
}
