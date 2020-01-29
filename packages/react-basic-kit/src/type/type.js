
import React from 'react'
import styled from 'styled-components'
import { sx } from 'react-kit-core'
import propTypes from 'prop-types'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'

import { Box } from '../layout/box'
import { Text } from './text'
import { tokens } from '../theme/index'
import { getTransition } from '../theme/utils'

/**
 * Most application UI text is covered by the <Text /> component and should be
 * extended on a per-application basis as sizes tend to be unique to the
 * use-case.
 * As a conveniece though, a type scale for common typographic elements is also
 * exposed by the library. Enjoy.
 */
const type = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'
].reduce((types, type) => {
  const h = styled(Text)(
    props => css(themeGet(`type.${type}`)(props)),
    sx
  )
  h.propTypes = Text.propTypes
  h.defaultProps = {
    as: type
  }
  h.displayName = `rbk-${type.toUpperCase()}`

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

export const Code = styled(Text)(
  css({
    fontFamily: 'monospace',
    fontWeight: 400,
    color: 'inherit'
  }),
  props => props.box && css({
    bg: 'gray.100',
    px: 1,
    borderRadius: 3
  }),
  sx
)
Code.propTypes = {
  ...Text.propTypes,
  box: propTypes.bool
}
Code.defaultProps = {
  box: false,
  as: 'code'
}
Code.displayName = 'TuringCodes'

export const Pre = styled(Text)(
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
  }),
  sx
)
Pre.propTypes = {
  ...Text.propTypes,
  box: propTypes.bool,
  inset: propTypes.bool
}
Pre.defaultProps = {
  as: 'pre',
  box: true,
  inset: false
}
Pre.displayName = 'Lovelace'

// @TODO add some code highlighting
// CodeBlock exists for markdown interop as react-markdown outputs the contents
// as `value`
export const CodeBlock = ({
  value,
  ...passProps
}) => <Pre {...passProps}>{value}</Pre>
CodeBlock.displayName = 'CodeBlock'

export const List = styled(Box)(
  props => css({
    listStyleType: props.listStyleType,
    pl: props.inset ? 5 : 0,
    my: tokens.layout.padding,
    paddingInlineStart: props.paddingInlineStart
  }),
  sx
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
List.displayName = 'TextList'

export const ListItem = styled(Text)(
  css({
    my: 1
  }),
  sx
)
ListItem.propTypes = {
  ...Text.propTypes
}
ListItem.defaultProps = {
  as: 'li',
  size: tokens.type.baseSize
}
ListItem.displayName = 'TextListItem'

export const Blockquote = styled(Text)(
  props => css({
    bg: 'gray.100',
    p: 3,
    borderLeftColor: 'primary',
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
  }),
  sx
)
Blockquote.propTypes = {
  ...Text.propTypes,
  inset: propTypes.bool
}
Blockquote.defaultProps = {
  as: 'blockquote',
  inset: false
}
Blockquote.displayName = 'QuotesAreForHumans'

export const Link = styled(Text)(
  css({
    outline: 'none',
    textDecoration: 'none',
    boxShadow: '0px 1px 0px 0px currentColor',
    transition: getTransition('box-shadow', 'main'),
    color: 'primary',
    ':hover': {
      boxShadow: 'none',
      cursor: 'pointer'
    },
    ':focus': {
      boxShadow: 'focusRing',
      borderRadius: 2
    }
  }),
  sx
)
Link.propTypes = {
  ...Text.propTypes,
  href: propTypes.string,
  to: propTypes.string
}
Link.defaultProps = {
  as: 'a'
}
Link.displayName = 'EveryoneLovesASlinky'
