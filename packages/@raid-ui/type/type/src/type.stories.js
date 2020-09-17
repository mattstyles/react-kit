
import { addBase } from '@internal/storybook'

import {
  H1, H2, H3, H4, H5, H6,
  P, Code, Pre,
  Blockquote, List, ListItem, Link
} from './index'

export default {
  title: 'Components/Type/Type',
  decorators: [addBase()]
}

export const Headings = () => (
  <>
    <H1>Heading</H1>
    <H2>Heading</H2>
    <H3>Heading</H3>
    <H4>Heading</H4>
    <H5>Heading</H5>
    <H6>Heading</H6>
  </>
)

const codeExample = `const pre = {
  component: 'Pre',
  detail: 'boxed by default'
}
`

export const Body = () => (
  <>
    <P>Paragraph text.</P>
    <P>Paragraph with <Code>code</Code> in it.</P>
    <P>Paragraph with <Link href='#'>link</Link> in it.</P>
    <Pre>{codeExample}</Pre>
    <Blockquote>This is a block quote. <footer>— This is a citation, <cite>title</cite></footer></Blockquote>
    <List>
      <ListItem>Hung by default</ListItem>
      <ListItem>It has an <Code>inset</Code> property if your really want</ListItem>
      <ListItem>Option C</ListItem>
      <ListItem>Option D</ListItem>
    </List>
    <List as='ol'>
      <ListItem>Option 1</ListItem>
      <ListItem>Option 2</ListItem>
    </List>
  </>
)

export const Inset = () => (
  <>
    <P>Components are hung by default, this can be changed using the <Code>inset</Code> property.</P>
    <Pre inset>{codeExample}</Pre>
    <List inset>
      <ListItem>Option A</ListItem>
      <ListItem>Option B</ListItem>
    </List>
    <Blockquote inset>I am inset, how boring and unappealing.</Blockquote>
  </>
)

export const PreStory = () => (
  <>
    <Pre>Pre with box=true, which is the default.</Pre>
    <Pre box={false}>Pre accepts a box=false parameter.</Pre>
  </>
)
PreStory.storyName = 'Pre'
