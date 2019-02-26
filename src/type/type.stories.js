
import {storiesOf} from '@storybook/react'

import {View} from '../'
import {H1, H2, H3, P, TextBlock, BlockQuote} from './'

storiesOf('Type', module)
  .add('text', () => (
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
  .add('text block', () => (
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
