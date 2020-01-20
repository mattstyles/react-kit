
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

import { Box } from '../layout/layout'
import { RawText } from './text'
import { tokens } from '../theme/index'
import { withSx } from '../utils'

/**
 * Most application UI text is covered by the <Text /> component and should be
 * extended on a per-application basis as sizes tend to be unique to the
 * use-case.
 * As a conveniece though, a type scale for common typographic elements is also
 * exposed by the library. Enjoy.
 */
const getThemeType = (key, props) => themeGet(`type.${key}`)(props)

const type = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'
].reduce((types, type) => {
  const h = withSx(styled(RawText))(
    props => css({
      ...getThemeType(type, props)
    })
  )
  h.propTypes = RawText.propTypes
  h.defaultProps = {
    as: type
  }
  return {
    ...types,
    [type.toUpperCase()]: h
  }
}, {})

export const H1 = type.H1
export const H2 = type.H2
export const H3 = type.H3
export const H4 = type.H4
export const H5 = type.H5
export const H6 = type.H6
export const P = type.P

// @Deprecate Headings now come with default top margin as they are designed
// to be document type. UI type can use text and manual spacing.
export const TextBlock = withSx(styled(Box))(
  props => css({
    'p:last-of-type': {
      mb: 0
    },
    'p + h1, p + h2, p + h3, p + h4, p + h5, p + h6': {
      mt: '2.5rem'
    }
  })
)

export const Code = withSx(styled(RawText))(
  props => css({
    fontFamily: 'monospace',
    fontWeight: 400
  }),
  props => props.box && css({
    bg: 'gray.100',
    px: 1,
    borderRadius: 3
  })
)
Code.propTypes = {
  ...RawText.propTypes,
  box: propTypes.bool
}
Code.defaultProps = {
  as: 'code',
  box: false
}

// @TODO supplied props, i.e. `<Pre bg='blue'>...</Pre>` have lower specificity
// than the styling below, which is a problem as the 'gray.100' will always
// trump the 'blue' you actually want for that specific instance.
// There must be a way to fix this. See type story example.
export const Pre = withSx(styled(RawText))(
  props => css({
    fontFamily: 'monospace',
    fontSize: tokens.type.baseSize,
    lineHeight: themeGet(`matchedLineHeights.${tokens.type.baseSize}`)(props),
    whiteSpace: ['pre-wrap', 'pre']
  }),
  props => props.box && css({
    bg: 'gray.100',
    p: 3,
    borderRadius: 3,
    mx: props.inset || -3,
    my: tokens.layout.padding
  })
)
Pre.propTypes = {
  ...RawText.propTypes,
  box: propTypes.bool,
  inset: propTypes.bool
}
Pre.defaultProps = {
  as: 'pre',
  box: true,
  inset: false
}

// @TODO add some code highlighting
// CodeBlock exists for markdown interop as react-markdown outputs the contents
// as `value`
export const CodeBlock = ({
  value,
  ...passProps
}) => <Pre {...passProps}>{value}</Pre>

// @TODO same problem here, <List pl={3} /> is overridden by p: 0
// padding-inline-start?
export const List = withSx(styled(Box))(
  props => css({
    listStyleType: props.styleType,
    pl: props.inset ? 5 : 0,
    my: tokens.layout.padding,
    paddingInlineStart: props.paddingInlineStart
  })
)
List.propTypes = {
  ...Box.propTypes,
  styleType: propTypes.string,
  inset: propTypes.bool
}
List.defaultProps = {
  as: 'ul',
  inset: false
}

export const ListItem = withSx(styled(RawText))(
  css({
    my: 1
  })
)
ListItem.propTypes = {
  ...RawText.propTypes
}
ListItem.defaultProps = {
  as: 'li',
  size: tokens.type.baseSize
}

export const Blockquote = withSx(styled(RawText))(
  props => css({
    bg: 'gray.100',
    p: 3,
    borderLeftColor: 'gray.400',
    borderLeftWidth: 4,
    borderLeftStyle: 'solid',
    borderRadius: 3,
    ml: props.inset ? 0 : -4,
    mr: props.inset ? 0 : -3,
    my: tokens.layout.padding,
    fontSize: tokens.type.baseSize,
    lineHeight: themeGet(`matchedLineHeights.${tokens.type.baseSize}`)(props),
    '> footer': {
      mt: 2
    }
  })
)
Blockquote.propTypes = {
  ...RawText.propTypes,
  inset: propTypes.bool
}
Blockquote.defaultProps = {
  as: 'blockquote',
  inset: false
}
