
import styled, { css } from 'styled-components'
import oc from 'open-color'
import { space, color, background, fontSize, fontFamily, lineHeight,
  fontWeight, fontStyle, letterSpacing, display } from 'styled-system'

import { getTheme, modTheme } from '../theme/utils'

const getType = key => getTheme(`type.${key}`)

const heading = css`
  font-family: ${getType('heading')};
  font-weight: 500;
  color: ${getType('color.heading')};
  ${getType('h3')}
  margin-top: 0;
  ${space}
  ${color}
  ${lineHeight}
`

export const H1 = styled.h1`
  ${heading}
  ${getType('h1')}
`

export const H2 = styled.h2`
  ${heading}
  ${getType('h2')}
`

export const H3 = styled.h3`
  ${heading}
  ${getType('h3')}
`

export const P = styled.p`
  font-family: ${getType('main')};
  font-weight: 400;
  color: ${getType('color.main')};
  ${getType('content')}
  margin-top: 0;
  margin-bottom: ${modTheme('type.size.base', 0.65)}rem;
  ${space}
  ${color}
  ${lineHeight}
`

export const TextBlock = styled.div`
  p + h1,
  p + h2,
  p + h3 {
    margin-top: ${modTheme('type.size.base', 2)}rem;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
`

export const BlockQuote = styled.div`
  font-family: ${getType('main')};
  font-weight: 400;
  color: ${getType('color.main')};
  ${getType('content')};
  margin-top: ${getTheme('basePadding')}rem;
  margin-bottom: ${getTheme('basePadding')}rem;
  padding: ${getTheme('basePadding')}rem;
  background: ${oc.white};
  border-radius: ${getTheme('borderRadius')}px;
  border-left: ${getTheme('borderRadius')}px solid ${getTheme('color.primary')};
  ${space}
  ${color}
  ${lineHeight}
`

export const Code = styled.code`
  font-family: ${getType('monospace')};
  color: ${getType('color.main')};
  ${getType('content')};
  ${space}
  ${color}
  ${lineHeight}
`

export const Text = styled.span`
  font-family: ${getType('main')};
  font-weight: 400;
  color: ${getType('color.main')};
  ${getType('content')}
  ${space}
  ${color}
  ${background}
  ${lineHeight}
  ${fontSize}
  ${fontFamily}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${display}
`
Text.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...background.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...lineHeight.propTypes,
  ...fontWeight.propTypes,
  ...fontStyle.propTypes,
  ...letterSpacing.propTypes,
  ...display.propTypes
}
