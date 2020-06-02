
import React from 'react'
import {
  View, Box, Flex, Divider, Aspect, Spread,
  H1, H2, Text, P, Code, Card,
  Image, RawImage,
  Placeholder
} from '../index'
import { GiFlame } from 'react-icons/gi'

import { addBase } from '../storybook/index'

export default {
  title: 'Components/Layout',
  decorators: [addBase()]
}

const StyledCssProp = React.forwardRef(
  (props, ref) => (
    <Box
      ref={ref}
      __css={{
        bg: 'background.800',
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
        flex='1'
        border='light.200'
        bg='background.100'
        p={2}
        m={2}
      >
        <Text>Using props to specify styling</Text>
      </Box>
      <Box
        sx={{ p: 2, m: 2, bg: 'background.800', color: 'white' }}
      >
        <Text>Using sx to specify styling</Text>
      </Box>
      <StyledCssProp sx={{ m: 2, p: 2, bg: 'critical.700', color: 'white' }}>
        <Text>Wrapping and styling with SC __css prop</Text>
      </StyledCssProp>
      <Box
        bg='info.500'
        __hover={{ bg: 'info.600' }}
        __active={{ bg: 'info.700' }}
        __focus={{ border: 'light.100' }}
        sx={{ m: 2, p: 2, color: 'white' }}
      >
        <Text>Using pseudo classes</Text>
      </Box>
    </View>
  )
}
BoxStory.story = {
  name: 'Box'
}

export const SpreadStory = () => {
  return (
    <View>
      <Spread sx={{ px: 4 }}>
        <GiFlame size={18} />
        <Text size={4}>Horizontal</Text>
        <Image src='https://www.fillmurray.com/64/64' size='32px' sx={{ borderRadius: 'circular' }} />
        <Text as='h3' size={5} display={['none', 'block']}>HHH</Text>
      </Spread>
      <Card sx={{ mt: 8, p: 0 }} depth={1}>
        <Spread sx={{ bg: 'background.100', pl: 6, pr: 7 }}>
          <H2 sx={{ mt: 4, mb: 3 }}>Title</H2>
          <GiFlame size={22} />
        </Spread>
        <Box py={3} px={6}>
          <P>Some content</P>
        </Box>
      </Card>
    </View>
  )
}
SpreadStory.story = {
  name: 'Spread'
}

export const PaneStory = () => {
  return (
    <View minHeight='100vh' isFlex>
      <Box as='header' sx={{ height: 8, bg: 'background.200' }}>
        Fixed height
      </Box>
      <Flex row flex={1}>
        <View isFlex>
          <H2>Split Pane</H2>
        </View>
        <View isFlex bg='background.100'>
          <H2>Split Pane</H2>
        </View>
      </Flex>
      <Box sx={{ bg: 'background.800', color: 'white' }}>
        <H2 sx={{ color: 'white' }}>Bottom Pane</H2>
      </Box>
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
    <Flex row>
      <Text>A</Text>
      <Divider isVertical />
      <Text>B</Text>
    </Flex>
    <H2>Colour</H2>
    <P>Colour is dictated by the border properties</P>
    <Divider borderColor='critical.700' />
  </>
)
DividerStory.story = {
  name: 'Divider'
}

export const ImageStory = () => {
  return (
    <View>
      <H2>Image</H2>
      <P>Image component has Placeholder and fallback states by default.</P>
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
        <Image
          size='80px'
          loadingComponent={() => <Placeholder size='full' />}
          src='http://www.placecage.com/gif/160/160'
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
        <Divider isVertical />
        <Text>Component</Text>
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
      <H2>Variants</H2>
      <Flex row sx={{ alignItems: 'center' }}>
        <Image src='https://www.placecage.com/64/64' variant='avatar' />
        <P sx={{ ml: 4 }}>Avatar</P>
      </Flex>
      <Flex row sx={{ alignItems: 'center' }}>
        <Box size={12}>
          <Image src='https://www.placecage.com/c/200/200' variant='fill' />
        </Box>
        <P sx={{ ml: 4 }}>Fill</P>
      </Flex>
    </View>
  )
}
ImageStory.story = {
  name: 'Image'
}

// @TODO SC keyframes helper?
export const AspectStory = () => {
  return (
    <View>
      <H2>16/9 Ratio</H2>
      <Aspect ratio={16 / 9}>
        <Box
          sx={{
            background: 'repeating-linear-gradient(-26.5deg, white 0%, white 25%, rebeccapurple 25%, rebeccapurple 50%, white 50%, white 75%, rebeccapurple 75%, rebeccapurple 100%)',
            backgroundSize: '64px 32px',
            animation: 'slide 4.2s infinite linear',
            '@keyframes slide': {
              from: {
                backgroundPosition: '0%'
              },
              to: {
                backgroundPosition: '100%'
              }
            }
          }}
        />
      </Aspect>
      <H2>4/3 Ratio</H2>
      <Aspect ratio={4 / 3}>
        <Box sx={{ bg: 'critical.600' }} />
      </Aspect>
      <H2>Default 1:1</H2>
      <Aspect>
        <Box sx={{ bg: 'positive.600' }} />
      </Aspect>
      <H2>Aspect image</H2>
      <Aspect ratio={16 / 9} sx={{ mt: 4 }}>
        <Image
          src='https://www.fillmurray.com/600/400'
        />
      </Aspect>
    </View>
  )
}
AspectStory.story = {
  name: 'Aspect'
}

export const PlaceholderStory = () => {
  return (
    <View>
      <H2>Using with image</H2>
      <P>Long transition and red colouring is just to check the visibility of the Placeholder component, otherwise the image will generally load and transition way too fast to see what is happening.</P>
      <Image
        size='200px'
        loadingComponent={() => <Placeholder size='full' color1='light.700' color2='critical.400' />}
        src='http://www.fillmurray.com/400/400'
        fallbackSrc='http://via.placeholder.com/200/f02321/fff?text=nope'
        transitionDuration={10000}
      />
      <H2>Standard colours</H2>
      <Placeholder width={160} height={48} />
      <Placeholder sx={{ width: 180, height: 24, mt: 2, borderRadius: 2 }} />
      <Placeholder width={48} height={48} mt={2} sx={{ borderRadius: 'circular' }} />
      <H2>Custom colours</H2>
      <P>From theme:</P>
      <Placeholder
        width={160}
        height={2}
        color1='critical.400'
        color2='critical.600'
      />
      <P sx={{ mt: 7 }}>Fallback to the raw value supplied:</P>
      <Placeholder
        width={160}
        height={32}
        color1='rebeccapurple'
        color2='hsl(260, 40%, 20%)'
      />
      <H2>As overlay</H2>
      <Box sx={{ width: 160, height: 24, bg: 'positive.400' }}>
        <Placeholder
          sx={{
            width: 'full',
            height: 'full'
          }}
          color1='light.500'
          color2='light.100'
        />
      </Box>
      <Box sx={{ width: 160, height: 24, mt: 2, bg: 'positive.400' }}>
        <Placeholder
          size='full'
          color1='dark.300'
          color2='dark.100'
        />
      </Box>
    </View>
  )
}
PlaceholderStory.story = {
  name: 'Placeholder'
}
