
import propTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import {
  H1, H2, H3, H4, H5, H6, P,
  Code, CodeBlock,
  List, ListItem
} from './type'

const headMap = [
  H1, H2, H3, H4, H5, H6
]

const MarkHead = (props) => {
  const Elem = headMap[props.level]
  return <Elem>{props.children}</Elem>
}

const elements = {
  heading: MarkHead,
  paragraph: P,
  list: List,
  listItem: ListItem,
  code: CodeBlock,
  inlineCode: Code
}

export const Markdown = ({
  children,
  renderers
}) => {
  return (
    <ReactMarkdown
      source={children}
      renderers={{ ...elements, ...renderers }}
    />
  )
}
Markdown.propTypes = {
  renderers: propTypes.object
}
Markdown.defaultProps = {
  renderers: {}
}
