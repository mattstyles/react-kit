
import styled, { ThemeProvider } from 'styled-components'
import { css } from '@styled-system/css'

import {
  Text, Badge,
  H1, H2, H3, H4, H5, H6, P,
  Code, Pre, Blockquote,
  List, ListItem, Link,
  theme, View, Box, Divider, Spacer
} from '../index'

import { addBase, Surround, SectionTitle } from '../storybook/index'

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
      <Text>Default size, inherited from body</Text>
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
              lineHeight={4}
              letterSpacing={kerning}
            >
              {kerning}
            </Text>
          ))
        }
      </Box>
      <H3>As</H3>
      <Text as='h4' size={7}>h4 size 7</Text>
      <P>Text resets base styles when using <Code>as</Code> to instruct the component which element to render.</P>
      <H3>Custom variants</H3>
      <ThemeProvider
        theme={{
          type: {
            cta: props => ({
              fontSize: 8,
              lineHeight: 8,
              fontWeight: 'bold',
              letterSpacing: 'loose'
            })
          }
        }}
      >
        <Text block __variant='cta'>Custom text type using <Code>__variant</Code></Text>
      </ThemeProvider>
      <Text block __variant='h2'>H2</Text>
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
      <Text display='inline-block' px={2} py={1} bg='background.100' mb={2} fontSize={2}>
        size : fontSize : matchedLineHeight
      </Text>
      <Box>
        {
          numericThemeFontSizes.map(size => (
            <Box key={`map:${size}`}>
              <Text display='inline-block' px={2} py={1} bg='background.100' mb={2} fontSize={2}>{
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
      <P>Paragraph<Badge>with a badge</Badge></P>
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
      <Spacer my={12} />
      <H3>Spacer component can be used to push elements around.</H3>
    </>
  )
}

export const Overrides = () => {
  return (
    <>
      <H2>Overriding styling per instance</H2>
      <P>Supplied properties for an instance should always take priority. The following example uses a <Code>Pre</Code> which is styled with a background colour, however, we have added a prop because we want this instance to be a different colour. The below <Code>Pre</Code> <em>should</em> have a blue background.</P>
      <Pre sx={{ bg: 'info.700', color: 'white' }}>
        {`const foo = [
  'sx',
  'is',
  'theme-aware'
]`}
      </Pre>
      <P>Styled components exposes a <Code>css</Code> prop but this is not theme-aware, <Code>sx</Code> <strong>is</strong> theme-aware.</P>
      <P>The following example will pick up the <Code>white</Code> colour as that is a standard css named colour, but it will not pick up the <Code>info.700</Code> as that is unique to the theme.</P>
      <Pre css={{ bg: 'info.700', color: 'white' }}>
        {`const foo = [
  'not aware',
  'of theme'
]`}
      </Pre>
      <H3>Extra sx examples</H3>
      <List sx={{ pl: 8 }}>
        <ListItem sx={{ color: 'critical.700' }}>Option A</ListItem>
      </List>
      <H1 sx={{ border: 'light' }}>Title</H1>
    </>
  )
}

export const Custom = () => {
  return (
    <>
      <Box sx={{ fontSize: 8, lineHeight: 8 }}>
        <Text>These elements should inherit size 8 from the parent</Text>
        <Pre>Some code</Pre>
        <Blockquote>A quote</Blockquote>
      </Box>
      <Divider />
      <Box>
        <Text>These elements should inherit size [3, 2] from the body</Text>
        <Pre>Some code</Pre>
        <Blockquote>A quote</Blockquote>
      </Box>
      <Divider />
      <Box>
        <Text size={5}>These elements should inherit size 8 from the parent</Text>
        <Pre size={6}>Some code</Pre>
        <Blockquote size={7}>A quote</Blockquote>
        <List>
          <ListItem size='s'>Thing 1</ListItem>
          <ListItem size='s'>Thing 2</ListItem>
        </List>
      </Box>
      <Divider />
      <Box>
        <Text sx={{ size: 4 }}>These elements use sx, where size conflicts with element height & width</Text>
        <Pre sx={{ size: 10, bg: 'blue.400' }}>Some code</Pre>
        <Text sx={{ fontSize: 6, lineHeight: 6 }}>Manually setting font size and line height works great though.</Text>
      </Box>
    </>
  )
}

const Avatar = styled(Box)(
  css({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    bg: 'background.800',
    color: 'white',
    fontWeight: 700,
    fontSize: 5,
    size: 10,
    borderRadius: 'circular',
    position: 'relative'
  })
)

export const Badges = () => {
  return (
    <View>
      <H2>Variants</H2>
      <Surround>
        <SectionTitle>Standard</SectionTitle>
        <Badge variant='standard'>Standard</Badge>
      </Surround>
      <Surround>
        <SectionTitle>Primary</SectionTitle>
        <Badge variant='primary'>Primary</Badge>
      </Surround>
      <Surround sx={{ bg: 'white' }}>
        <SectionTitle>Inline with text</SectionTitle>
        <Text>Some text <Badge variant='primary'>Badge</Badge></Text>
        <H2>Within a title <Badge>Badge</Badge></H2>
        <H2>Within a title <Badge sx={{ fontSize: [3, 2] }}>Badge</Badge></H2>
        <Text>Outline variant, with colour <Badge variant='outline' sx={{ color: 'critical.700' }}>Badge</Badge></Text>
      </Surround>
      <Surround>
        <SectionTitle>Number badge</SectionTitle>
        <Avatar>
          <Text sx={{ fontWeight: 700 }} size={5}>MS</Text>
          <Badge
            variant='circular'
            sx={{
              position: 'absolute',
              top: -1,
              right: -1,
              bg: 'primary',
              color: 'white'
            }}
          >
            7
          </Badge>
        </Avatar>
        <Avatar sx={{ ml: 3 }}>
          MS
          <Badge
            variant='circular'
            sx={{
              bg: 'primary',
              color: 'white',
              position: 'absolute',
              right: -1,
              bottom: -1
            }}
          >
            12
          </Badge>
        </Avatar>

        <Avatar sx={{ ml: 3 }}>
          MS
          <Badge
            variant='circular'
            sx={{
              bg: 'positive.400',
              textShadow: 'textOnLight',
              position: 'absolute',
              left: -1,
              bottom: -1
            }}
          >
            7
          </Badge>
        </Avatar>

        <Avatar sx={{ ml: 3 }}>
          MS
          <Badge
            variant='circular'
            sx={{
              bg: 'critical.700',
              position: 'absolute',
              left: -1,
              top: -1,
              fontSize: [5, 4]
            }}
          >
            4
          </Badge>
        </Avatar>
      </Surround>
    </View>
  )
}
