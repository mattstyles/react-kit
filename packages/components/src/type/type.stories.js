
// import { H1, H2, H3, P, TextBlock, BlockQuote, Text, Code } from './'
import {
  Text,
  H1, H2, H3, H4, H5, H6, P,
  TextBlock, Code, Pre, BlockQuote,
  Markdown
} from './'

import { theme } from '../theme'
console.log(theme)
window.theme = theme

const numericThemeFontSizes = Object.keys(theme.fontSizes)
  .filter(size => size === '0' || parseInt(size))
const aliasThemeFontSizes = Object.keys(theme.fontSizes)
  .filter(size => size !== '0' && !parseInt(size))

export default {
  title: 'Components|Type'
}

export const TextProps = () => {
  return (
    <>
      <Text as='h3'>Sizes</Text>
      <Text as='p'><code>size</code> property will set the font size and the line height and match the two from the theme scales which ensures that text component will match the underlying grid.</Text>
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
      <Text as='h3'>Sizes</Text>
      <Text as='p'><code>fontSize</code> and <code>lineHeight</code> are also exposed as properties and match their respective scales, giving more control.</Text>
      <Text as='p'>Some <code>fontSize</code> aliases are also exposed, which are particularly useful for UI control text.</Text>
      <div>
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
      </div>
      <div>
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
      </div>
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
      <Text as='h3'>Font size, matched line height and line wrapping</Text>
      <Text display='inline-block' px={2} py={1} bg='gray.200' mb={2} fontSize={2}>
        size : fontSize : matchedLineHeight
      </Text>
      <div style={{ width: 480 }}>
        {
          numericThemeFontSizes.map(size => (
            <div key={`map:${size}`}>
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
            </div>
          ))
        }
      </div>
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
      <P>A <Code box>code component</Code> can also style itself with a box.</P>
      <Pre>{codeExample}</Pre>
      <P>Elements like lists and <Code>Pre</Code> are hung by default to maintain vertical rhythm. Use <Code>inset</Code> to alter this behaviour</P>
      <BlockQuote>This is a block quote. It too has an <Code>inset</Code> property.</BlockQuote>
    </>
  )
}

export const WithTextBlock = () => {
  return (
    <>
      <Text display='block'>Standard block (no special heading treatment)</Text>
      <div style={{ width: 320 }}>
        <H1>This is a top-level heading</H1>
        <P>{lorem}</P>
        <H2>Another heading but this time an H2</H2>
        <P>{lorem}</P>
        <H3>Most documents only have three levels of heading, but there are more if you need them.</H3>
        <P>{lorem}</P>
        <P>{lorem}</P>
      </div>
      <Text display='block'>With text block</Text>
      <div style={{ width: 320 }}>
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
        </TextBlock>
      </div>
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
  Some text to display in a paragraph tag.
          `}
        </Markdown>
      </TextBlock>
    </>
  )
}
MarkdownStory.story = {
  name: 'Markdown'
}
