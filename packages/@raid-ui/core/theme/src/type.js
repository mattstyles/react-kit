
import { themeGet } from '@styled-system/theme-get'
import { pxToRem } from './utils'

const type = [
  [11, 12, 14, 16, 19, 21, 26, 32, 40, 58, 72], // Font size
  [16, 16, 20, 24, 32, 32, 36, 48, 56, 72, 90] // line height
]

/**
 * Typography
 */
// @TODO should we use breakpoint versions of these scales, particularly for fonts?
// @TODO typography tokenisation needs plenty of tidying
const sizeBase = pxToRem(type[0])
export const uiFontScale = {
  ...sizeBase,
  xs: sizeBase[0],
  s: sizeBase[1],
  m: sizeBase[2],
  l: sizeBase[3],
  xl: sizeBase[4]
}

// Aligned with font sizes to remain within the 4px subgrid.
// Multipliers are included, but should be used with caution as they are
// reasonably likely to break out from the grid.
const lineBase = pxToRem(type[1])
export const lineHeights = {
  ...lineBase,
  xs: lineBase[0],
  s: lineBase[1],
  m: lineBase[2],
  l: lineBase[3],
  xl: lineBase[4]
}

// @TODO scale? or only having an alias object is ok?
export const kerning = {
  tight: '-1px',
  narrow: '-0.5px',
  standard: '0px',
  loose: '1px',
  expanded: '2.5px'
}

export const fonts = {
  fallback: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;",
  main: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;",
  heading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;",
  monospace: 'Source Code Pro, Consolas, monospace'
}

// These are decent enough default styling but if you want to use markdown
// heavily in your project, and not use these elements elsewhere then some of
// margins might want a bit of work, which would be fairly unique to the use
// case. i.e. the headings do not quite sit correctly with these defaults as
// a situation h1->h2->p _probably_ has more spacing than you want. However,
// as a general purpose system (particularly where you don't nest headings)
// these defaults work well and maintain good alignment.
export const typeTokens = {
  h1: props => ({
    fontSize: [9, 8],
    lineHeight: [9, 8],
    mt: 7,
    mb: 6,
    letterSpacing: 'narrow',
    fontWeight: 300,
    color: themeGet('tokens.type.heading.main')(props)
  }),
  h2: props => ({
    fontSize: [8, 7],
    lineHeight: [8, 7],
    mt: 7,
    mb: 6,
    letterSpacing: 'narrow',
    fontWeight: 300,
    color: themeGet('tokens.type.heading.main')(props)
  }),
  h3: props => ({
    fontSize: [7, 6],
    lineHeight: [8, 7],
    mt: 7,
    mb: 6,
    fontWeight: 300,
    color: themeGet('tokens.type.heading.main')(props)
  }),
  h4: props => ({
    fontSize: [6, 5],
    lineHeight: [7, 6],
    mt: 7,
    mb: 6,
    fontWeight: 500,
    color: themeGet('tokens.type.heading.main')(props)
  }),
  h5: props => ({
    fontSize: [5, 4],
    lineHeight: [6, 5],
    mt: 7,
    mb: 6,
    fontWeight: 500,
    color: themeGet('tokens.type.heading.main')(props)
  }),
  h6: props => ({
    fontSize: [4, 3],
    lineHeight: [5, 4],
    mt: 7,
    mb: 6,
    fontWeight: 500,
    color: themeGet('tokens.type.heading.main')(props)
  }),
  p: props => ({
    fontSize: [3, 2],
    lineHeight: [3, 3],
    mt: 3,
    mb: 3,
    // These selectors target paragraphs placed next to each other but do not
    // work in a block of markdown where paragraphs might sit either side of
    // another element, like an image or a heading. So we'll just reduce the
    // margins for all paragraphs.
    // '&+&': {
    //   my: 3
    // },
    // '&:first-child': {
    //   mb: 3
    // },
    fontWeight: 400,
    color: themeGet('tokens.type.body.main')(props)
  })
}
