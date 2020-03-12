
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import {
  View, Pane, H1, H2, P, Text, Box, Code, Image, Aspect, Flex
} from 'react-basic-kit'

import { Scrollable, createScrollTarget } from './'

import { addBase, Layout } from '../.storybook/base'

export default {
  title: 'Scrollable',
  decorators: [addBase(Layout)]
}

const ScrollResponder = createScrollTarget(({
  isVisible
}) => (
  <P>{`isVisible: ${isVisible}`}</P>
))

const ScrollMove = createScrollTarget(styled(Box)(
  props => css({
    height: 1,
    width: props.isVisible ? '100%' : '0%',
    transitionProperty: 'width',
    transitionDuration: `${themeGet('transition.main')(props)}ms`,
    transitionTimingFunction: 'ease-in',
    bg: 'blue.400'
  })
))

const ScrollGrow = createScrollTarget(styled(Box)(
  props => css({
    size: 2,
    transitionProperty: 'transform',
    transitionDuration: `${themeGet('transition.main')(props)}ms`,
    transitionTimingFunction: 'ease-in',
    transform: `scale(${props.isVisible ? 5 : 1})`,
    bg: props.color || 'primary',
    borderRadius: 'circular'
  })
))

const Horizontal = styled(Flex)(
  css({
    flexDirection: 'row',
    width: '300%',
    minHeight: 120,
    bg: 'gray.100'
  })
)

const HorizontalItem = styled(Box)(
  css({
    border: 'light.200',
    minHeight: 120,
    width: 'full',
    p: 3
  })
)

const CustomScrollbars = styled(Scrollable)(
  props => css({
    background: themeGet('colors.gray.75')(props),

    '::-webkit-scrollbar': {
      width: props.scrollbarWidth,
      height: props.scrollbarHeight
    },

    '::-webkit-scrollbar-track, ::-webkit-scrollbar-corner': {
      borderRadius: 0,
      background: themeGet(`colors.${props.trackColor}`)(props)
    },

    '::-webkit-scrollbar-thumb': {
      borderRadius: 0,
      background: themeGet(`colors.${props.thumbColor}`)(props)
    }
  })
)
CustomScrollbars.defaultProps = {
  thumbColor: 'green.600',
  trackColor: 'dark.100',
  scrollbarWidth: 1,
  scrollbarHeight: 0
}

export const Single = () => (
  <Scrollable sx={{ height: 'calc(100vh - 3rem)' }}>
    <H1>Single scrollable element</H1>
    <P>From which we spring muse about courage of our questions rich in mystery the carbon in our apple pies the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
    <H2>Diamonds and alcohol</H2>
    <P>Rings of Uranus trillion quasar galaxies another world dispassionate extraterrestrial observer. Courage of our questions take root and flourish finite but unbounded star stuff harvesting star light astonishment permanence of the stars. Extraordinary claims require extraordinary evidence made in the interiors of collapsing stars the ash of stellar alchemy encyclopaedia galactica concept of the number one invent the universe.</P>
    <P>Invent the universe descended from astronomers made in the interiors of collapsing stars shores of the cosmic ocean rich in mystery kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
    <P>From which we spring muse about courage of our questions rich in mystery the carbon in our apple pies the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
    <H2>The birth of stars</H2>
    <P>From which we spring muse about courage of our questions rich in mystery the carbon in our apple pies the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
    <P>Invent the universe descended from astronomers made in the interiors of collapsing stars shores of the cosmic ocean rich in mystery kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
    <Box p={5}>
      <ScrollGrow />
    </Box>
    <P sx={{ mt: 2 }}>Great turbulent clouds venture the ash of stellar alchemy citizens of distant epochs a still more glorious dawn awaits shores of the cosmic ocean. Another world permanence of the stars how far away invent the universe realm of the galaxies kindling the energy hidden in matter.</P>
  </Scrollable>
)

export const BasicVertical = () => (
  <Scrollable sx={{ height: 'calc(100vh - 3rem)' }}>
    <H1>Scrollable element</H1>
    <P>Great turbulent clouds venture the ash of stellar alchemy citizens of distant epochs a still more glorious dawn awaits shores of the cosmic ocean. Another world permanence of the stars how far away invent the universe realm of the galaxies kindling the energy hidden in matter.</P>
    <Box p={5}>
      <ScrollGrow />
    </Box>
    <ScrollMove />
    <P><strong>Be aware that the following scroll responder has a direct parent that changed how its offset position is equated, so will not respond correctly:</strong></P>
    <Box p={5} position='relative'>
      <ScrollGrow color='yellow.400' />
    </Box>
    <P><strong>Things you want to respond need to be positioned relative to the scroll provider.</strong></P>
    <P mt={2}>From which we spring muse about courage of our questions rich in mystery the carbon in our apple pies the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
    <Aspect ratio={16 / 9} sx={{ mt: 4 }}>
      <Image size='full' src='https://picsum.photos/id/1002/400/250' />
    </Aspect>
    <H2 mt={4}>Diamonds and alcohol</H2>
    <P>Rings of Uranus trillion quasar galaxies another world dispassionate extraterrestrial observer. Courage of our questions take root and flourish finite but unbounded star stuff harvesting star light astonishment permanence of the stars. Extraordinary claims require extraordinary evidence made in the interiors of collapsing stars the ash of stellar alchemy encyclopaedia galactica concept of the number one invent the universe.</P>
    <ScrollResponder />
    <ScrollMove />
    <P>Invent the universe descended from astronomers made in the interiors of collapsing stars shores of the cosmic ocean rich in mystery kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
    <ScrollMove />
    <Box p={5}>
      <ScrollGrow color='red.400' />
    </Box>
  </Scrollable>
)

export const BasicHorizontal = () => (
  <View>
    <Box p={1}>
      <H1>Scrollable Element</H1>
    </Box>
    <Scrollable>
      <Horizontal>
        <HorizontalItem>
          <Text>One</Text>
          <Box p={4}>
            <ScrollGrow color='red.400' />
          </Box>
        </HorizontalItem>
        <HorizontalItem>
          <Text>Two</Text>
          <Box p={4}>
            <ScrollGrow color='green.400' />
          </Box>
        </HorizontalItem>
        <HorizontalItem>
          <Text>Three</Text>
          <Box p={4}>
            <ScrollGrow color='blue.400' />
          </Box>
        </HorizontalItem>
      </Horizontal>
    </Scrollable>
    <Box>
      <H2>Some more content</H2>
      <P>Scroll the above element horizontally to expose scroll responsive elements</P>
    </Box>
  </View>
)

export const InitiallyAppears = () => (
  <Scrollable isPadded>
    <Box>
      <H1>A title</H1>
      <P>Elements within a scrollable should have <Code>isVisible</Code> set to try initially.</P>
    </Box>
    <Box p={4}>
      <ScrollGrow color='rebeccapurple' />
    </Box>
  </Scrollable>
)

export const MultipleScrollables = () => (
  <View isFlex>
    <Pane maxHeight='100px' background='rgb(244, 244, 244)'>
      <Scrollable>
        <Box p={2}>
          <H1>One</H1>
          <P>This panel will scroll vertically.</P>
          <P>Cosmic ocean the sky calls to us dream of the mind's eye a still more glorious dawn awaits vastness is bearable only through love concept of the number one.</P>
          <Box p={4}>
            <ScrollGrow color='rebeccapurple' />
          </Box>
          <P>Stirred by starlight a still more glorious dawn awaits citizens of distant epochs across the centuries kindling the energy hidden in matter a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
        </Box>
      </Scrollable>
    </Pane>
    <Pane maxHeight='100px' background='rgb(232, 235, 236)'>
      <Scrollable>
        <Box p={2}>
          <H1>Two</H1>
          <P>This panel will scroll vertically.</P>
          <P>Cosmic ocean the sky calls to us dream of the mind's eye a still more glorious dawn awaits vastness is bearable only through love concept of the number one.</P>
          <Box p={4}>
            <ScrollGrow color='rebeccapurple' />
          </Box>
          <P>Stirred by starlight a still more glorious dawn awaits citizens of distant epochs across the centuries kindling the energy hidden in matter a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
        </Box>
      </Scrollable>
    </Pane>
    <Pane p={2}>
      <H2>An additional panel</H2>
      <P>This one does not scroll.</P>
      <P>Multiple scrollables are ok, not sure about scrollables within scrollables but that is a rare use-case.</P>
    </Pane>
  </View>
)

export const CustomScrollbarsExample = () => (
  <View>
    <Flex maxHeight='200px' m={2}>
      <CustomScrollbars>
        <Box p={2}>
          <H1>One</H1>
          <P>This panel will scroll vertically.</P>
          <P>Cosmic ocean the sky calls to us dream of the mind's eye a still more glorious dawn awaits vastness is bearable only through love concept of the number one.</P>
          <Box p={4}>
            <ScrollGrow color='rebeccapurple' />
          </Box>
          <P>Stirred by starlight a still more glorious dawn awaits citizens of distant epochs across the centuries kindling the energy hidden in matter a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
        </Box>
      </CustomScrollbars>
    </Flex>
    <Flex maxHeight='200px' m={2}>
      <CustomScrollbars scrollbarHeight='2px' scrollbarWidth='2px' thumbColor='blue.400'>
        <Box sx={{ p: 2, width: '150%' }}>
          <H1>Two</H1>
          <P>This panel will scroll horizontally and vertically.</P>
          <P>Cosmic ocean the sky calls to us dream of the mind's eye a still more glorious dawn awaits vastness is bearable only through love concept of the number one.</P>
          <Box p={4}>
            <ScrollGrow color='green.700' />
          </Box>
          <P>Stirred by starlight a still more glorious dawn awaits citizens of distant epochs across the centuries kindling the energy hidden in matter a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
        </Box>
      </CustomScrollbars>
    </Flex>
  </View>
)
CustomScrollbarsExample.story = {
  title: 'Custom Scrollbars'
}
