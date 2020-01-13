
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'

import { Text } from './text'

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
