
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import MarkdownJSX from 'markdown-to-jsx'

import {
  H1, H2, H3, H4, H5, H6, P,
  Code, Pre, Blockquote,
  List, ListItem, Link,
  Divider
} from '@raid/basic-kit'

// @TODO add some code highlighting
// CodeBlock exists for markdown interop as react-markdown outputs the contents
// as `value`
// const CodeBlock = ({
//   value,
//   ...passProps
// }) => <Pre {...passProps}>{value}</Pre>
// CodeBlock.displayName = 'CodeBlock'

// const headMap = [
//   H1, H2, H3, H4, H5, H6
// ]

// const MarkHead = (props) => {
//   const Elem = headMap[props.level]
//   return <Elem>{props.children}</Elem>
// }

// const elements = {
//   heading: MarkHead,
//   paragraph: P,
//   list: List,
//   listItem: ListItem,
//   code: CodeBlock,
//   inlineCode: Code,
//   pre: Pre,
//   thematicBreak: Divider,
//   a: Link,
//
//   // react-markdown wraps content in a p
//   blockquote: styled(Blockquote)(
//     css({
//       '> p': {
//         m: 0
//       },
//       '> p + p': {
//         mt: 2
//       }
//     })
//   )
// }

// react-markdown wraps content in a p
const MBlockquote = styled(Blockquote)(
  css({
    '> p': {
      m: 0
    },
    '> p + p': {
      mt: 2
    }
  })
)

const MDivider = () => <Divider as='hr' />

const options = {
  overrides: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    a: Link,
    code: Code,
    pre: Pre,

    ul: List,
    li: ListItem,
    blockquote: MBlockquote,
    hr: MDivider
  }
}

export const Markdown = ({
  children,
  renderers
}) => {
  // return (
  //   <ReactMarkdown
  //     source={children}
  //     escapeHtml={false}
  //     renderers={{ ...elements, ...renderers }}
  //   />
  // )
  return (
    <MarkdownJSX options={options}>
      {children}
    </MarkdownJSX>
  )
}
Markdown.propTypes = {
  renderers: propTypes.object
}
Markdown.defaultProps = {
  renderers: {}
}
