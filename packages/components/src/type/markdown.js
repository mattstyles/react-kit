
import ReactMarkdown from 'react-markdown'

import { H1, H2, H3, H4, H5, H6, P } from './type'

const headMap = [
  H1, H2, H3, H4, H5, H6
]

const MarkHead = (props) => {
  const Elem = headMap[props.level]
  return <Elem>{props.children}</Elem>
}

const elements = {
  heading: MarkHead,
  paragraph: P
}

export const Markdown = ({
  children
}) => {
  return (
    <ReactMarkdown
      source={children}
      renderers={elements}
    />
  )
}
