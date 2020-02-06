
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

// Aligned with font sizes to remain within the 4px subgrid.
// Multipliers are included, but should be used with caution as they are
// reasonably likely to break out from the grid.
const lineBase = pxToRem([
  16, 16, 20, 24, 32, 32, 36, 48, 56, 72, 90
])
export const lineHeights = {
  ...lineBase,
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
  xs: lineBase[0],
  s: lineBase[1],
  m: lineBase[2],
  l: lineBase[3],
  xl: lineBase[4]
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
