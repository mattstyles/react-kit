
import React from 'react'

import { View } from '../layout'
import { addBase } from '../storybook/index'
import {
  H1, H2, H3, H4, H5, H6, P,
  Code, Pre, List, ListItem, Blockquote, Link
} from './type'

export default {
  title: 'Components/Test',
  decorators: [addBase()]
}

export const Test = () => {
  return (
    <View>
      <P>Some <Code>code</Code> is contained <Code box>within this</Code> text.</P>
      <Pre>{`const foo = 'bar'

console.log(\`hello \${foo}\`)`}
      </Pre>
      <List>
        <ListItem>One</ListItem>
        <ListItem>Two</ListItem>
      </List>
      <Blockquote>
        <P sx={{ mt: 0, mb: 2 }}>Quotes for Humans</P>
        <cite>A human</cite>
      </Blockquote>
      <P>Some text with an <Link href='#'>anchor</Link> in it.</P>
    </View>
  )
}

export const Headings = () => {
  return (
    <View>
      <H1>heading</H1>
      <H2>heading</H2>
      <H3>heading</H3>
      <H4>heading</H4>
      <H5>heading</H5>
      <H6>heading</H6>
      <P>paragraph</P>
    </View>
  )
}
