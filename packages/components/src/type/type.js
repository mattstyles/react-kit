
import React from 'react'
import propTypes from 'prop-types'
import { themeGet } from '@styled-system/theme-get'

import { Box } from '../layout/box'
import { Text } from './text'
import { tokens } from '../theme/index'

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
  const h = React.forwardRef(
    (props, ref) => {
      return (
        <Text
          ref={ref}
          {...props}
          __variant={type}
        />
      )
    }
  )
  h.propTypes = Text.propTypes
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
export const TextBlock = React.forwardRef(
  (props, ref) => (
    <Box
      ref={ref}
      {...props}
      __css={{
        'p:last-of-type': {
          mb: 0
        },
        'p + h1, p + h2, p + h3, p + h4, p + h5, p + h6': {
          mt: '2.5rem'
        }
      }}
    />
  )
)
TextBlock.propTypes = {
  ...Box.propTypes
}

export const Code = React.forwardRef(
  ({ box, ...props }, ref) => (
    <Text
      ref={ref}
      {...props}
      __css={{
        fontFamily: 'monospace',
        fontWeight: 400,
        ...box && {
          bg: 'gray.100',
          px: 1,
          borderRadius: 3
        }
      }}
    />
  )
)
Code.propTypes = {
  ...Text.propTypes,
  box: propTypes.bool
}
Code.defaultProps = {
  as: 'code',
  box: false
}

export const Pre = React.forwardRef(
  ({ box, inset, ...props }, ref) => (
    <Text
      ref={ref}
      {...props}
      __css={{
        fontFamily: 'monospace',
        fontSize: tokens.type.baseSize,
        lineHeight: themeGet(`matchedLineHeights.${tokens.type.baseSize}`)(props),
        whiteSpace: ['pre-wrap', 'pre'],
        ...box && {
          bg: 'gray.100',
          p: 3,
          borderRadius: 3,
          mx: inset || -3,
          my: tokens.layout.padding
        }
      }}
    />
  )
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

// @TODO add some code highlighting
// CodeBlock exists for markdown interop as react-markdown outputs the contents
// as `value`
export const CodeBlock = ({
  value,
  ...passProps
}) => <Pre {...passProps}>{value}</Pre>

export const List = React.forwardRef(
  ({ styleType, paddingInlineStart, inset, ...props }, ref) => (
    <Box
      ref={ref}
      {...props}
      __css={{
        listStyleType: styleType,
        pl: inset ? 5 : 0,
        my: tokens.layout.padding,
        paddingInlineStart: paddingInlineStart
      }}
    />
  )
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

export const ListItem = React.forwardRef(
  (props, ref) => (
    <Text
      ref={ref}
      {...props}
      __css={{
        my: 1
      }}
    />
  )
)
ListItem.propTypes = {
  ...Text.propTypes
}
ListItem.defaultProps = {
  as: 'li',
  size: tokens.type.baseSize
}

export const Blockquote = React.forwardRef(
  ({ inset, ...props }, ref) => (
    <Text
      ref={ref}
      {...props}
      __css={{
        bg: 'gray.100',
        p: 3,
        borderLeftColor: 'gray.400',
        borderLeftWidth: 4,
        borderLeftStyle: 'solid',
        borderRadius: 3,
        ml: inset ? 0 : -4,
        mr: inset ? 0 : -3,
        my: tokens.layout.padding,
        fontSize: tokens.type.baseSize,
        lineHeight: themeGet(`matchedLineHeights.${tokens.type.baseSize}`)(props),
        '> footer': {
          mt: 2
        }
      }}
    />
  )
)
Blockquote.propTypes = {
  ...Text.propTypes,
  inset: propTypes.bool
}
Blockquote.defaultProps = {
  as: 'blockquote',
  inset: false
}
