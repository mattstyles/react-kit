
import { pxToRem } from './utils'

/**
 * Typography
 */
// @TODO should we use breakpoint versions of these scales, particularly for fonts?
// @TODO typography tokenisation needs plenty of tidying
export const uiFontScale = pxToRem([
  11, 12, 14, 16, 19, 21, 26, 32, 40, 58, 72
])

// aligned to 4px grid, which allows text to line up to the grid.
// the named properties from the aliases, below, are multipliers, but should
// be used with caution as it could throw out the rhythm (probably will).
// fibonacci * base(4) is mapped against this scale, with additions.
export const lineHeights = pxToRem([
  4, 8, 12, 16, 20, 24, 32, 36, 40, 52, 84
])

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

/**
 * aliases
 */
uiFontScale.xs = uiFontScale[0]
uiFontScale.s = uiFontScale[1]
uiFontScale.m = uiFontScale[2]
uiFontScale.l = uiFontScale[3]
uiFontScale.xl = uiFontScale[4]

// Tailwind scale
lineHeights.none = 1
lineHeights.tight = 1.25
lineHeights.snug = 1.375
lineHeights.normal = 1.5
lineHeights.relaxed = 1.625
lineHeights.loose = 2
