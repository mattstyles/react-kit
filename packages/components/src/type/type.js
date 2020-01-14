
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

import { Box } from '../layout/layout'
import { Text } from './text'
import { tokens } from '../theme/index'

/**
 * Most application UI text is covered by the <Text /> component and should be
 * extended on a per-application basis as sizes tend to be unique to the
 * use-case.
 * As a conveniece though, a type scale for common typographic elements is also
 * exposed by the library. Enjoy.
 */
const getThemeType = (key, props) => themeGet(`type.${key}`)(props)

// const headingStyling = css({
//   mt: 8
// })

const type = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'
].reduce((types, type) => {
  const h = styled(Text)(
    props => css({
      ...getThemeType(type, props)
    })
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
export const TextBlock = styled(Box)(
  css({
    'p:last-of-type': {
      mb: 0
    },
    'p + h1, p + h2, p + h3, p + h4, p + h5, p + h6': {
      mt: '2.5rem'
    }
  })
)

export const Code = styled(Text)(
  css({
    fontFamily: 'monospace'

  }),
  props => props.box && css({
    bg: 'gray.100',
    px: 1,
    borderRadius: 3
  })
)
Code.propTypes = {
  ...Text.propTypes,
  box: propTypes.bool
}
Code.defaultProps = {
  as: 'code',
  box: false
}

export const Pre = styled(Text)(
  props => css({
    fontFamily: 'monospace',
    fontSize: tokens.type.baseSize,
    lineHeight: themeGet(`matchedLineHeights.${tokens.type.baseSize}`)(props)
  }),
  props => props.box && css({
    bg: 'gray.100',
    p: 3,
    borderRadius: 3,
    mx: props.inset || -3
  })
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

export const List = styled(Box)(
  props => css({
    listStyleType: props.styleType,
    p: 0
  })
)
List.propTypes = {
  ...Box.propTypes,
  styleType: propTypes.string
}
List.defaultProps = {
  as: 'ul'
}

export const ListItem = styled(Box)(
  css({
    my: 1,
    fontSize: tokens.type.baseSize
  })
)
ListItem.propTypes = {
  ...Box.propTypes
}
ListItem.defaultProps = {
  as: 'li'
}

// @TODO cite and footer for quotes
export const Blockquote = styled(Text)(
  props => css({
    bg: 'gray.100',
    px: 3,
    py: 3,
    borderRadius: 3,
    mx: props.inset || -3,
    fontSize: tokens.type.baseSize,
    lineHeight: themeGet(`matchedLineHeights.${tokens.type.baseSize}`)(props)
  })
)
Blockquote.propTypes = {
  ...Text.propTypes,
  inset: propTypes.bool
}
Blockquote.defaultProps = {
  as: 'blockquote',
  inset: false
}
