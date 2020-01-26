
import {
  Text, Markdown,
  H1, H2, H3, H4, H5, H6, P,
  TextBlock, Code, Pre, Blockquote,
  List, ListItem, Spacer, Link,
  theme, Box
} from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Components/Type',
  decorators: [addBase()]
}

const numericThemeFontSizes = Object.keys(theme.fontSizes)
  .filter(size => size === '0' || parseInt(size))
const aliasThemeFontSizes = Object.keys(theme.fontSizes)
  .filter(size => size !== '0' && !parseInt(size))

export const TextProps = () => {
  return (
    <>
      <H3>Sizes</H3>
      <P><Code>size</Code> property will set the font size and the line height and match the two from the theme scales which ensures that text component will match the underlying grid.</P>
      {
        numericThemeFontSizes.map(size => (
          <Text
            key={`fontSizes:${size}`}
            as='div'
            size={size}
          >
            {`Text Component: ${size}`}
          </Text>
        ))
      }
      <H3>Sizes</H3>
      <P><Code>fontSize</Code> and <Code>lineHeight</Code> are also exposed as properties and match their respective scales, giving more control.</P>
      <P>Some <Code>fontSize</Code> aliases are also exposed, which are particularly useful for UI control text. Aliases can be used in the <Code>size</Code> or <Code>fontSize</Code> properties.</P>
      <Box my={3}>
        {
          numericThemeFontSizes.map(size => (
            <Text
              key={`fontSizes:${size}`}
              mx={1}
              fontSize={size}
            >
              {size}
            </Text>
          ))
        }
      </Box>
      <Box my={3}>
        {
          aliasThemeFontSizes.map(alias => (
            <Text
              key={`fontSizes:${alias}`}
              mx={1}
              fontSize={alias}
            >
              {alias}
            </Text>
          ))
        }
      </Box>
      <H3>Other scales</H3>
      <H4>Letter spacing</H4>
      <Box my={3}>
        {
          Object.keys(theme.letterSpacings).map(kerning => (
            <Text
              key={kerning}
              display='block'
              fontSize='xl'
              lineHeight={8}
              letterSpacing={kerning}
            >
              {kerning}
            </Text>
          ))
        }
      </Box>
    </>
  )
}

TextProps.story = {
  name: 'Text'
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const ScaleChecks = () => {
  return (
    <>
      <H3>Font size, matched line height and line wrapping</H3>
      <Text display='inline-block' px={2} py={1} bg='gray.200' mb={2} fontSize={2}>
        size : fontSize : matchedLineHeight
      </Text>
      <Box>
        {
          numericThemeFontSizes.map(size => (
            <Box key={`map:${size}`}>
              <Text display='inline-block' px={2} py={1} bg='gray.200' mb={2} fontSize={2}>{
                `${size} : ${theme.fontSizes[size]} : ${theme.matchedLineHeights[size]}`
              }
              </Text>
              <Text
                as='div'
                size={size}
                mb={7}
              >
                {lorem}
              </Text>
            </Box>
          ))
        }
      </Box>
    </>
  )
}

const codeExample = `const pre = {
  component: 'Pre',
  detail: 'boxed by default'
}
`

export const Document = () => {
  return (
    <>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      <P>Paragraph</P>
      <P>This has some <Code>code markup</Code> in it.</P>
      <P>This has some <strong>strong</strong> text and some <em>emphasis</em> text. It also has a <Link href='#'>link</Link> in it.</P>
      <P>A <Code box>code component</Code> can also style itself with a box.</P>
      <Pre>{codeExample}</Pre>
      <P>Elements like lists and <Code>Pre</Code> are hung by default to maintain vertical rhythm. Use <Code>inset</Code> to alter this behaviour</P>
      <Blockquote>This is a block quote. It too has an <Code>inset</Code> property. <footer>— This is a citation, <cite>title</cite></footer></Blockquote>
      <P>A list of things is hung by default.</P>
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
      <H3>Inset things</H3>
      <Pre inset>{codeExample}</Pre>
      <List inset>
        <ListItem>Option A</ListItem>
        <ListItem>Option B</ListItem>
      </List>
      <Blockquote inset>I am inset, how boring and unappealing.</Blockquote>
      <H3>Type element APIs</H3>
      <Pre box={false}>Pre accepts a box=false parameter.</Pre>
    </>
  )
}

export const WithTextBlock = () => {
  return (
    <>
      <Text display='block'>Standard block (no special heading treatment)</Text>
      <H1>This is a top-level heading</H1>
      <P>{lorem}</P>
      <H2>Another heading but this time an H2</H2>
      <P>{lorem}</P>
      <H3>Most documents only have three levels of heading, but there are more if you need them.</H3>
      <P>{lorem}</P>
      <P>{lorem}</P>
      <Spacer py={6} />
      <Text as='div' display='block'>With text block</Text>
      <TextBlock>
        <H1>This is a top-level heading</H1>
        <P>{lorem}</P>
        <H2>Another heading but this time an H2</H2>
        <P>{lorem}</P>
        <H3>Most documents only have three levels of heading, but there are more if you need them.</H3>
        <P>{lorem}</P>
        <P>{lorem}</P>
        <H4>This is another level of heading, down to 4 now</H4>
        <P>{lorem}</P>
        <H5>The 5th level down, this is pretty rare</H5>
        <P>{lorem}</P>
        <H6>The near mythical 6th level of heading in a document</H6>
        <P>{lorem}</P>
        <P>{lorem}</P>
        <H1>An H1 should not normally find its way in to text</H1>
        <H2>An h2 underneath an h1, which might happen</H2>
        <H3>Sequential is ok but might need manual adjusting</H3>
        <P>{lorem}</P>
      </TextBlock>
    </>
  )
}
WithTextBlock.story = {
  name: 'Text Block'
}

export const MarkdownStory = () => {
  return (
    <>
      <Markdown>Markdown is **supported**</Markdown>
      <Markdown>
        {`# Heading

Some text to display in a paragraph tag.
        `}
      </Markdown>
      <TextBlock>
        <Markdown>
          {`# Heading
## 2nd heading
Some text to display in a paragraph tag.`}
        </Markdown>
      </TextBlock>
      <Markdown>
        {`## Lists and code and stuff

> This is a blockquote <footer>— Cited author, <cite>title</cite></footer>

The next section is a list:

* Option 1
* Option 2

How about _mucking_ with text a **little** more.

\`\`\`js
React-markdown outputs the contents of code blocks in
to the value prop rather than children.
CodeBlock only exists to push it into Pre children.
At small screen widths it’ll wrap like a normal text
node, but not at wider screens.
\`\`\`

However, some inline \`code\` should be straight forward
        `}
      </Markdown>
    </>
  )
}
MarkdownStory.story = {
  name: 'Markdown'
}

export const Overrides = () => {
  return (
    <>
      <H2>Overriding styling per instance</H2>
      <P>Supplied properties for an instance should always take priority. The following example uses a <Code>Pre</Code> which is styled with a background colour, however, we have added a prop because we want this instance to be a different colour. The below <Code>Pre</Code> <em>should</em> have a blue background.</P>
      <Pre sx={{ bg: 'blue.700', color: 'white' }}>
        {`const foo = [
  'sx',
  'is',
  'theme-aware'
]`}
      </Pre>
      <P>Styled components exposes a <Code>css</Code> prop but this is not theme-aware, <Code>sx</Code> <strong>is</strong> theme-aware.</P>
      <P>The following example will pick up the <Code>white</Code> colour as that is a standard css named colour, but it will not pick up the <Code>blue.700</Code> as that is unique to the theme.</P>
      <Pre css={{ bg: 'blue.700', color: 'white' }}>
        {`const foo = [
  'not aware',
  'of theme'
]`}
      </Pre>
      <H3>Extra sx examples</H3>
      <List sx={{ pl: 8 }}>
        <ListItem sx={{ color: 'red.700' }}>Option A</ListItem>
      </List>
      <H1 sx={{ border: 'light' }}>Title</H1>
    </>
  )
}
