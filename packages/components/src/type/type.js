
import propTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

import { Text } from './text'
import { tokens } from '../theme'

/**
 * Most application UI text is covered by the <Text /> component and should be
 * extended on a per-application basis as sizes tend to unique to the use-case.
 * As a conveniece though a type scale for common typographic elements are also
 * exposed by the library. Enjoy.
 */
const getThemeType = (key, props) => themeGet(`type.${key}`)(props)

const headingStyling = css({
  mt: 0
})

const type = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'
].reduce((types, type) => {
  const h = styled(Text)(
    props => css({
      ...getThemeType(type, props)
    }),
    headingStyling
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

export const TextBlock = styled('div')(
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
    bg: 'gray.200',
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
    bg: 'gray.200',
    p: 2,
    borderRadius: 3,
    mx: !props.inset && -2
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

export const List = () => {}
export const ListItem = () => {}

// @TODO cite and footer for quotes
export const BlockQuote = styled(Text)(
  props => css({
    bg: 'gray.200',
    px: 2,
    py: 3,
    borderRadius: 3,
    mx: !props.inset && -2,
    fontSize: tokens.type.baseSize,
    lineHeight: themeGet(`matchedLineHeights.${tokens.type.baseSize}`)(props)
  })
)
BlockQuote.propTypes = {
  ...Text.propTypes,
  inset: propTypes.bool
}
BlockQuote.defaultProps = {
  as: 'blockquote',
  inset: false
}
