
import React from 'react'
import {
  View, Pane, H1, H2, Text, P, Box, Flex, Divider, Code, Image
} from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Components/Layout/Layout',
  decorators: [addBase()]
}

const Extendo = React.forwardRef(
  (props, ref) => (
    <Box
      ref={ref}
      __css={{
        bg: 'gray.800',
        color: 'white'
      }}
      {...props}
    />
  )
)

export const BoxStory = () => {
  return (
    <View>
      <Box
        border='light'
        bg='gray.100'
        p={2}
        m={2}
      >
        <Text>Borders: light</Text>
      </Box>
      <Extendo sx={{ m: 2, p: 2, bg: 'red.700' }}>Extendo</Extendo>
    </View>
  )
}
BoxStory.story = {
  name: 'Box'
}

export const PaneStory = () => {
  return (
    <View minHeight='100vh' isFlex>
      <Pane as='header' sx={{ height: 8, flex: 'none' }}>
        Fixed height
      </Pane>
      <Pane split>
        <Pane>
          <H2>Split Pane</H2>
        </Pane>
        <Pane bg='gray.100'>
          <H2>Split Pane</H2>
        </Pane>
      </Pane>
      <Pane sx={{ bg: 'gray.800', color: 'white' }}>
        <H2 sx={{ color: 'white' }}>Bottom Pane</H2>
      </Pane>
    </View>
  )
}
PaneStory.story = {
  name: 'Pane'
}

export const DividerStory = () => (
  <>
    <H1>Divider</H1>
    <P>Some text</P>
    <Divider />
    <P>Some more text, below the <Code>{'<hr />'}</Code></P>
    <H2>Vertical rule</H2>
    <P>Divider defaults as an <Code>{'<hr />'}</Code> so be mindful of composition</P>
    <Flex flexDirection='row'>
      <Text>A</Text>
      <Divider isVertical />
      <Text>B</Text>
    </Flex>
    <H2>Colour</H2>
    <P>Colour is dictated by the border properties</P>
    <Divider borderColor='red.700' />
  </>
)
DividerStory.story = {
  name: 'Divider'
}

export const ImageStory = () => {
  return (
    <View>
      <Box sx={{ size: '300px' }}>
        <Image src='https://www.fillmurray.com/300/300' />
      </Box>
      <Text>Some text.</Text>
      <Box sx={{ size: '120px' }}>
        <Image rounding='circle' src='https://www.fillmurray.com/120/120' />
      </Box>
      <Text>More text down here, below a sized element.</Text>
    </View>
  )
}
ImageStory.story = {
  name: 'Image'
}
