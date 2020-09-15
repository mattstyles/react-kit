
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import MarkdownJSX from 'markdown-to-jsx'

import {
  H1, H2, H3, H4, H5, H6, P,
  Code, Pre, Blockquote,
  List, ListItem, Link
} from '@raid-ui/type'
import { Divider } from '@raid-ui/divider'

const MBlockquote = styled(Blockquote)(
  css({
    '> p': {
      m: 0
    },
    '> p + p': {
      mt: 2
    },
    'cite p': {
      my: 2
    }
  })
)

const MDivider = () => <Divider as='hr' />

const overrides = {
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

export const Markdown = ({
  children,
  elements
}) => {
  return (
    <MarkdownJSX
      children={children}
      options={{
        overrides: {
          ...overrides,
          ...elements || {}
        }
      }}
    />
  )
}
Markdown.propTypes = {
  elements: propTypes.object
}
