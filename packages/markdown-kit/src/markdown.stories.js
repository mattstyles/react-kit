
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle, Box } from '@raid/basic-kit'

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

export const MarkdownStory = () => {
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

> This is a blockquote

A line here, longer blockquote (with citation), follows:

> This is another blockquote.</br>
> It spread multiple lines.
> It also contains a citation.
>
> --<cite>with citation</cite>

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
