
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import { View, Box, utils } from '../'
import { H1, H2, H3, P, TextBlock, BlockQuote, Text, Code } from './'

const { getRangeTheme } = utils

const Surround = styled(Box)`
  background: ${getRangeTheme('palette.background', 0)};
  margin: ${getRangeTheme('space', 2)}px;
  padding: ${getRangeTheme('space', 2)}px;
  border-radius: ${getRangeTheme('borders', 1)}px;
`

storiesOf('Type', module)
  .add('Text', () => (
    <View isPadded>
      <BlockQuote>Note that without a TextBlock headers in body copy will not have any top margin.</BlockQuote>
      <H1>Header for this content</H1>
      <P>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime.</P>
      <P>Do you believe that shit?</P>
      <P>It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.</P>
      <H2>Another heading, this time an h2</H2>
      <P>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing.</P>
      <P>She starred in one of the ones that became nothing.</P>
      <H3>How about that?</H3>
      <P>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder.</P>
      <P>We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</P>
    </View>
  ))
  .add('Text block', () => (
    <View isPadded>
      <TextBlock>
        <BlockQuote>TextBlock adds top margins to better align titles in a body of copy.</BlockQuote>
        <H1>Header for this content</H1>
        <P>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime.</P>
        <P>Do you believe that shit?</P>
        <P>It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.</P>
        <H2>Another heading, this time an h2</H2>
        <P>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing.</P>
        <P>She starred in one of the ones that became nothing.</P>
        <H3>How about that?</H3>
        <P>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder.</P>
        <P>We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</P>
      </TextBlock>
    </View>
  ))
  .add('Text variants', () => (
    <View>
      <Surround>
        <Text>Some text</Text>
      </Surround>
      <Surround>
        <Text>Some text</Text>
      </Surround>
      <Surround>
        <Text m={2} p={2}>Margin: 2. Padding: 2.</Text>
      </Surround>
      <Surround>
        <Text m={2} p={2} display='block'>Margin: 2. Padding: 2. Display: 'block'.</Text>
      </Surround>
      <Surround>
        <Text lineHeight={4}>Line height: 4</Text>
      </Surround>
      <Surround>
        <Text block color='red'>Color: <Code>red</Code></Text>
        <Text block color='primary'>Color: <Code>Primary</Code></Text>
      </Surround>
      <Surround>
        <Text background='rebeccapurple' color='white'>Background: <Code color='white'>Purple</Code></Text>
      </Surround>
      <Surround>
        <Text letterSpacing={4}>Letter spacing: 4</Text>
      </Surround>
      <Surround>
        <Text fontWeight={800}>Font weight: 800</Text>
      </Surround>
      <Surround>
        <Text fontStyle='italic'>Font style: Italic</Text>
      </Surround>
      <Surround>
        <Text fontSize={2} block>Font size: 2</Text>
        <Text fontSize={4} block>Font size: 4</Text>
      </Surround>
      <Surround>
        <Text fontFamily='monaco'>Font family: Monaco</Text>
      </Surround>
      <Surround>
        <Text fontFamily='monospace'>Themed font family: monospace</Text>
      </Surround>
      <Surround>
        <Text block>Block attribute</Text>
        <Text as='div'>Note that the block attribute applies <Code>display: block</Code>, if you want a different element, such as <Code>div</Code> then use the <Code>as</Code> property.</Text>
      </Surround>
    </View>
  ))
  .add('UI type scale', () => (
    <View bg='white'>
      <Text block fontSize={4} m={3} mb={2} fontWeight={600}>UI Scale</Text>
      <Surround>
        <Text block fontSize='xs'>Size: xs 0</Text>
        <Text block fontSize='s'>Size: s 1</Text>
        <Text block fontSize='m'>Size: m 2</Text>
        <Text block fontSize='l'>Size: l 3</Text>
        <Text block fontSize='xl'>Size: xl 4</Text>
      </Surround>
    </View>
  ))
