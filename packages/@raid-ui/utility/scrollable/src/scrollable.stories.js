
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import styled from 'styled-components'

import { addBase } from '@internal/storybook'
import { View, Box, Flex, Aspect } from '@raid-ui/container'
import { Image } from '@raid-ui/image'
import { Text, H2, P } from '@raid-ui/type'

import { Scrollable, createScrollTarget } from './index'

export default {
  title: 'Components/Utility/Scrollable',
  decorators: [addBase()]
}

const Content = () => {
  return (
    <>
      <P>From which we spring muse about courage of our questions rich in mystery the carbon in our apple pies the sky calls to us and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
      <P>Invent the universe descended from astronomers made in the interiors of collapsing stars shores of the cosmic ocean rich in mystery kindling the energy hidden in matter and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
      <P>Rings of Uranus trillion quasar galaxies another world dispassionate extraterrestrial observer. Courage of our questions take root and flourish finite but unbounded star stuff harvesting star light astonishment permanence of the stars. Extraordinary claims require extraordinary evidence made in the interiors of collapsing stars the ash of stellar alchemy encyclopaedia galactica concept of the number one invent the universe.</P>
    </>
  )
}

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

export const Basic = () => {
  return (
    <Box sx={{ bg: 'background.200', height: '300px', px: 2 }}>
      <Scrollable>
        <H2>Scroll this element</H2>
        <P sx={{ fontWeight: '700' }}>Scroll to the bottom of the page to see a scroll responder respond to the position of the parent and know when it goes in and out of view.</P>
        <P>Scrollable will fit the container.</P>
        <Box p={5}>
          <ScrollGrow />
        </Box>
        <Content />
        <Box p={5}>
          <ScrollGrow />
        </Box>
      </Scrollable>
    </Box>
  )
}

export const Styled = () => {
  return (
    <Scrollable sx={{ bg: 'background.100', height: '300px', px: 2 }}>
      <H2>Scrollable can be styled</H2>
      <Aspect ratio={16 / 9} sx={{ mt: 4 }}>
        <Image size='full' src='https://picsum.photos/id/1002/400/250' />
      </Aspect>
      <Content />
      <Box p={5}>
        <ScrollGrow />
      </Box>
    </Scrollable>
  )
}

const HorizontalContainer = styled(Flex)(
  props => css({
    flexDirection: 'row',
    width: (props.children.length * 100) + '%',
    minHeight: 120,
    bg: 'background.100'
  })
)

const HorizontalItem = styled(Box)(
  css({
    border: 'base.200',
    minHeight: 120,
    width: 'full',
    p: 3
  })
)

export const Horizontal = () => {
  return (
    <View>
      <Box p={1}>
        <H2>Scrollable Element</H2>
      </Box>
      <Scrollable>
        <HorizontalContainer>
          <HorizontalItem>
            <Text>One</Text>
            <Box p={4}>
              <ScrollGrow color='critical.400' />
            </Box>
          </HorizontalItem>
          <HorizontalItem>
            <Text>Two</Text>
            <Box p={4}>
              <ScrollGrow color='positive.400' />
            </Box>
          </HorizontalItem>
          <HorizontalItem>
            <Text>Three</Text>
            <Box p={4}>
              <ScrollGrow color='info.400' />
            </Box>
          </HorizontalItem>
        </HorizontalContainer>
      </Scrollable>
      <Box>
        <H2>Some more content</H2>
        <P>Scroll the above element horizontally to expose scroll responsive elements</P>
      </Box>
    </View>
  )
}

const CustomScrollbars = styled(Scrollable)(
  props => css({
    background: themeGet('colors.background.75')(props),

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
  thumbColor: 'positive.600',
  trackColor: 'dark.100',
  scrollbarWidth: 1,
  scrollbarHeight: 0
}

export const CustomScrollbarsExample = () => (
  <View>
    <Flex maxHeight='200px' m={2}>
      <CustomScrollbars>
        <Box p={2}>
          <H2>One</H2>
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
      <CustomScrollbars scrollbarHeight='2px' scrollbarWidth='2px' thumbColor='info.400'>
        <Box sx={{ p: 2, width: '150%' }}>
          <H2>Two</H2>
          <P>This panel will scroll horizontally and vertically.</P>
          <P>Cosmic ocean the sky calls to us dream of the mind's eye a still more glorious dawn awaits vastness is bearable only through love concept of the number one.</P>
          <Box p={4}>
            <ScrollGrow color='positive.700' />
          </Box>
          <P>Stirred by starlight a still more glorious dawn awaits citizens of distant epochs across the centuries kindling the energy hidden in matter a very small stage in a vast cosmic arena and billions upon billions upon billions upon billions upon billions upon billions upon billions.</P>
        </Box>
      </CustomScrollbars>
    </Flex>
  </View>
)
CustomScrollbarsExample.storyName = 'Custom Scrollbars'
