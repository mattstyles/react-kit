
import { addBase } from '@internal/storybook'

import { P } from '@raid-ui/type'
import { Box } from '@raid-ui/container'

import { Markdown } from './index'

export default {
  title: 'Components/Markdown',
  decorators: [addBase()]
}

const text1 = `
# Heading 1

> I ❤️ raid

This is a block of **markdown** with _some_ markdown elements within it.

![fillmurray image](https://www.fillmurray.com/200/200)
`

const lists = `
## Lists and code and stuff

The next section is a list:

* Option 1
* Option 2
`

const code = `
\`\`\`js
function makeHappy () {
  console.log('You are ace')
}
\`\`\`

---

Inline \`code\` too.
`

const quotes = `
## Blockquote

> Just a blockquote with a single sentence.

---

> A blockquote _usually_ requires citation.
>
> <cite>-- Quote author</cite>

---

> Sometimes you really want to put a lot of content in to a quote.
>
> This is possible if you _really_ _really_ want to.
`

export const Sink = () => (
  <>
    <Markdown>Markdown is **supported**</Markdown>
    <Markdown>{text1}</Markdown>
    <Markdown>{lists}</Markdown>
    <Markdown>{code}</Markdown>
    <Markdown>{quotes}</Markdown>
  </>
)

const elements = {
  p: ({ children }) => <P sx={{ color: 'critical.600' }}>{children}</P>,
  Purple: ({ children }) => <Box sx={{ bg: 'rebeccapurple', color: 'white', px: 4, py: 2 }}>{children}</Box>
}

const md = `
## Custom renderer

Pass in an \`elements\` object to change what gets output.

Custom elements can also be passed in.

<Purple>Hello World</Purple>
`

export const Custom = () => {
  return (
    <>
      <Markdown elements={elements} children={md} />
    </>
  )
}
