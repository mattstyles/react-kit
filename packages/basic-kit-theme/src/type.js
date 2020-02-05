
import { pxToRem } from './utils'

/**
 * Typography
 */
// @TODO should we use breakpoint versions of these scales, particularly for fonts?
// @TODO typography tokenisation needs plenty of tidying
const sizeBase = pxToRem([
  11, 12, 14, 16, 19, 21, 26, 32, 40, 58, 72
])
export const uiFontScale = {
  ...sizeBase,
  xs: sizeBase[0],
  s: sizeBase[1],
  m: sizeBase[2],
  l: sizeBase[3],
  xl: sizeBase[4]
}

// aligned to 4px grid, which allows text to line up to the grid.
// the named properties from the aliases, below, are multipliers, but should
// be used with caution as it could throw out the rhythm (probably will).
// fibonacci * base(4) is mapped against this scale, with additions.
// @TODO ditch this scale and use matched scale to size.
export const lineHeights = {
  ...pxToRem([
    4, 8, 12, 16, 20, 24, 32, 36, 40, 52, 84
  ]),
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2
}

// @TODO scale? or only having an alias object is ok?
export const kerning = {
  condensed: '-1px',
  narrow: '-0.5px',
  standard: '0px',
  expanded: '1px'
}

export const fonts = {
  fallback: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;",
  main: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;",
  heading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;",
  monospace: 'Source Code Pro, Consolas, monospace'
}
