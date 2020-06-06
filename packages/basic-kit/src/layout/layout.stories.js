
import React from 'react'
import {
  View, Box, Flex, Aspect, Center, Grid,
  Divider, Spread, Stack, Spacer,
  Card, Image, RawImage,
  H1, H2, Text, P, Code, Button, Placeholder
} from '../index'
import { GiFlame, GiDwarfFace, GiGriffinSymbol } from 'react-icons/gi'
import { FiZoomIn, FiZoomOut, FiCamera } from 'react-icons/fi'

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

export const StackStory = () => {
  return (
    <View>
      <Card>
        <Stack>
          <Text as='h2' size='xl'>Stack</Text>
          <Text>Handles spacing <em>between</em> child elements.</Text>
          <Text>Under the hood uses grid to space elements.</Text>
        </Stack>
        <Divider space={4} />
        <Stack tight>
          <Text>Elements inside Stack should size themselves and not be affecting by default grid behaviour of attempting to fill the container space. We’re only using Grid here for the gap functionality. The <Code>tight</Code> prop can help to achieve that.</Text>
          <Button colour='positive'>Positive Action</Button>
          <Button tight icon><FiCamera size={18} /></Button>
          <Button variant='outline'>Button</Button>
        </Stack>
      </Card>
      <Spacer py={2} />
      <Card>
        <Stack space={4}>
          <Text as='h2' size='xl'>Stack</Text>
          <Text>A horizontal stack is no problem, use <Code>row</Code></Text>
          <Stack row tight>
            <Button icon rounding='pill'><FiCamera size={20} /></Button>
            <Button tight icon rounding='pill' variant='transparent'><FiZoomIn size={20} /></Button>
            <Button tight icon rounding='pill' variant='transparent'><FiZoomOut size={20} /></Button>
          </Stack>
          <Text>Stack implements <Code>flexbox</Code> so alignment values (such as default stretching of children across the container) will work.</Text>
          <Text>The following is a stack within a stack. We <em>want</em> the following to stretch across the space, if we did not want this then we should use the <Code>tight</Code> prop. <Code>tight</Code> is not the default behaviour because otherwise this stack would inherit justification rules from the parent and ignore its own, which is not what we want.</Text>
          <Stack row sx={{ textAlign: 'center' }}>
            <Text bg='background.500' color='white'>A</Text>
            <Text bg='background.600' color='white'>B</Text>
            <Text bg='background.700' color='white'>C</Text>
          </Stack>
        </Stack>
        <Divider space={2} />
        <Text>The following Stack is <strong>not</strong> contained within another Stack (i.e. we’re not seeing multiple levels of grid in the DOM).</Text>
        <Spacer py={2} />
        <Stack row justifyContent='stretch' justifyItems='stretch' sx={{ textAlign: 'center' }}>
          <Text bg='info.500' color='white'>A</Text>
          <Text bg='info.600' color='white'>B</Text>
          <Text bg='info.700' color='white'>C</Text>
        </Stack>
      </Card>
      <Spacer py={2} />
      <Card>
        <Stack space={[2, 4]}>
          <Text>Stack can also collapse from a horizontal row to vertical column alignment. Resize the screen.</Text>
          <Text>Default breakpoints at set at <Code>["40em", "52em", "64em"]</Code></Text>
          <Spacer py={2} />
          <Stack space={0}>
            <Stack space={4} collapse>
              <GiFlame size={20} />
              <GiDwarfFace size={20} />
              <GiGriffinSymbol size={20} />
            </Stack>
            <Divider space={3} />
            <Stack space={4} collapse={2}>
              <GiFlame size={20} />
              <GiDwarfFace size={20} />
              <GiGriffinSymbol size={20} />
            </Stack>
            <Divider space={3} />
            <Stack space={4} collapse={3}>
              <GiFlame size={20} />
              <GiDwarfFace size={20} />
              <GiGriffinSymbol size={20} />
            </Stack>
            <Divider space={3} />
            <Stack space={4} collapse={4}>
              <GiFlame size={20} />
              <GiDwarfFace size={20} />
              <GiGriffinSymbol size={20} />
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </View>
  )
}
StackStory.story = {
  name: 'Stack'
}

export const SpreadStory = () => {
  return (
    <View>
      <Stack space={8}>
        <Spread px={4}>
          <GiFlame size={18} />
          <Text size={4}>Horizontal</Text>
          <Image src='https://www.fillmurray.com/64/64' size='32px' sx={{ borderRadius: 'circular' }} />
          <Text as='h3' size={5} display={['none', 'block']}>HHH</Text>
        </Spread>
        <Card p={0} depth={1}>
          <Spread pl={6} pr={7} bg='background.100'>
            <H2 sx={{ mt: 4, mb: 3 }}>Title</H2>
            <GiFlame size={22} />
          </Spread>
          <Box py={3} px={6}>
            <P><Code>Spread</Code> equally spaces child components across its width. Whilst doing so it vertically aligned them also.</P>
          </Box>
        </Card>
      </Stack>
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
        Fixed height header.
      </Box>
      <Flex row flex={1}>
        <View isFlex>
          <Box>
            <H2>Split Pane</H2>
            <P>View and flex can be used to create a panelled layout.</P>
          </Box>
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

export const CenterStory = () => {
  return (
    <View>
      <Aspect ratio={4 / 3} bg='background.800' color='white'>
        <Center>
          <Text size={5} fontWeight={400} letterSpacing='5px' fontFamily='monospace'>CENTER</Text>
        </Center>
      </Aspect>
      <Spacer py={3} />
      <Box width={200} height={120} bg='background.800' color='critical.500'>
        <Center fit>
          <GiFlame size={20} color='inherit' />
        </Center>
      </Box>
    </View>
  )
}
CenterStory.story = {
  name: 'Center'
}

export const GridStory = () => {
  return (
    <View>
      <Text>Try resizing the screen. Media queries are supported.</Text>
      <Spacer py={4} />
      <Grid gridGap={4} gridTemplateColumns={['repeat(2, auto)', 'repeat(3, auto)']} justifyContent='center'>
        <Image size={128} src='https://www.fillmurray.com/200/200' />
        <Box p={3} bg='background.800' color='white'>Box</Box>
        <Image size={128} src='https://www.fillmurray.com/128/128' />
        <Image size={128} src='https://www.fillmurray.com/64/64' />
        <Image size={128} src='https://www.fillmurray.com/100/100' />
        <Image size={128} src='https://www.fillmurray.com/50/50' />
        <Image size={128} src='https://www.fillmurray.com/160/160' />
        <Image size={128} src='https://www.fillmurray.com/112/112' />
        <Box p={3} bg='background.900' color='info.400'>
          <Center fit>Box</Center>
        </Box>
      </Grid>
    </View>
  )
}
GridStory.story = {
  name: 'Grid'
}

export const SpacerStory = () => {
  return (
    <View>
      <Card>
        <Text size='xl'>Section 1</Text>
        <Spacer py={2} />
        <Text size='m'>Some text, separated by a spacer.</Text>
      </Card>
      <Spacer py={4} />
      <Card>
        <Text size='xl'>Section 2</Text>
        <Spacer py={2} />
        <Text size='m'>Horizontal is no problem either.</Text>
        <Spacer py={2} />
        <Flex row>
          <Text size={8}>S</Text>
          <Spacer px={2} />
          <Text size={8}>P</Text>
          <Spacer px={2} />
          <Text size={8}>A</Text>
          <Spacer px={2} />
          <Text size={8}>C</Text>
          <Spacer px={2} />
          <Text size={8}>E</Text>
          <Spacer px={2} />
        </Flex>
      </Card>
    </View>
  )
}
SpacerStory.story = {
  name: 'Spacer'
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
