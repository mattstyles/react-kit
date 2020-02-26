
import React from 'react'
import {
  View, Pane, Box, Flex, Divider, Aspect,
  H1, H2, Text, P, Code,
  Image, RawImage
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
      <H2>Image</H2>
      <P>Image component has loading and fallback states by default.</P>
      <Flex flexDirection='row'>
        <Image
          size='80px'
          src='https://www.placecage.com/160/160'
        />
        <Image
          size='80px'
          loadingSrc='https://www.placecage.com/c/16/16'
          src='https://www.placecage.com/c/160/160'
          transitionDuration={2000}
          sx={{ ml: 2 }}
        />
        <Image
          size='80px'
          loadingSrc='http://via.placeholder.com/16/16/fff'
          src='thiswillfail'
          fallbackSrc='http://via.placeholder.com/200/f02321/fff?text=nope'
          sx={{ ml: 2 }}
        />
      </Flex>
      <Flex flexDirection='row' my={4}>
        <Text>Src</Text>
        <Divider isVertical />
        <Text>Duration</Text>
        <Divider isVertical />
        <Text>Failure</Text>
      </Flex>
      <Box sx={{ size: '200px' }}>
        <Image src='https://www.placecage.com/200/200' />
      </Box>
      <Image
        size='160px'
        loadingSrc='http://via.placeholder.com/16/16/fff'
        src='http://via.placeholder.com/1600/1600/fff'
        transitionDuration={2000}
      />
      <H2>Raw Image</H2>
      <P>Raw image component is just a thin wrapper around an <Code>img</Code> tag.</P>
      <Box sx={{ size: '300px' }}>
        <RawImage src='https://www.fillmurray.com/300/300' />
      </Box>
      <Text>Some text.</Text>
      <Box sx={{ size: '120px' }}>
        <RawImage rounding='circle' src='https://www.fillmurray.com/120/120' />
      </Box>
      <Text>More text down here, below a sized element.</Text>
    </View>
  )
}
ImageStory.story = {
  name: 'Image'
}

export const AspectStory = () => {
  return (
    <View>
      <H2>16/9 Ratio</H2>
      <Aspect ratio={16 / 9}>
        <Box sx={{ bg: 'blue.700' }} />
      </Aspect>
      <H2>4/3 Ratio</H2>
      <Aspect ratio={4 / 3}>
        <Box sx={{ bg: 'red.600' }} />
        <Box sx={{ bg: 'yellow.600' }} />
      </Aspect>
      <H2>Default 1:1</H2>
      <Aspect>
        <Box sx={{ bg: 'green.600' }} />
      </Aspect>
    </View>
  )
}
AspectStory.story = {
  name: 'Aspect'
}
