
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle, Box, P } from '@raid/basic-kit'

import { Markdown } from './'

const Layout = ({ children }) => (
  <Box
    sx={{
      width: ['100%', '30rem', '36rem'],
      p: 6,
      mx: 'auto'
    }}
  >
    {children}
  </Box>
)

const Base = ({
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        {children}
      </Layout>
    </ThemeProvider>
  )
}

export default {
  title: 'Markdown',
  decorators: [
    story => <Base>{story()}</Base>
  ]
}

export const Sink = () => {
  return (
    <>
      <Markdown>Markdown is **supported**</Markdown>
      <Markdown>
        {`# Heading

Some text to display in a paragraph tag.
        `}
      </Markdown>
      <Box>
        <Markdown>
          {`# Heading
## 2nd heading
Some text to display in a paragraph tag.`}
        </Markdown>
      </Box>
      <Markdown>
        {`## Lists and code and stuff

The next section is a list:

* Option 1
* Option 2

> This is a blockquote

---

_Italic_ and **bold** text are all good.

\`\`\`js
function makeHappy () {
  console.log('You are ace')
}
\`\`\`

However, some inline \`code\` should be straight forward
        `}
      </Markdown>
    </>
  )
}

export const BlockquoteStory = () => {
  return (
    <Markdown>
      {`## Blockquote

> Just a blockquote with a single sentence.

---

> A blockquote _usually_ requires citation.
>
> <cite>-- Quote author</cite>

---

> Sometimes you really want to put a lot of content in to a quote.
>
> This is possible if you _really_ really want to.`}
    </Markdown>
  )
}
BlockquoteStory.story = {
  name: 'Blockquote'
}

const renderer = {
  paragraph: ({ children }) => <P sx={{ color: 'critical.600' }}>{children}</P>
}

export const Custom = () => {
  return (
    <>
      <Markdown renderers={renderer}>
        {` ## Custom renderer

  Pass in a \`renderers\` object to change what gets output.
  `}
      </Markdown>
    </>
  )
}
