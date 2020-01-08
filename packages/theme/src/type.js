
/**
 * Typography
 */
// @TODO should we use breakpoint versions of these scales, particularly for fonts?
// @TODO typography tokenisation needs plenty of tidying
export const uiFontScale = [
  1.1, 1.2, 1.4, 1.6, 2.0, 2.3, 2.8, 3.5
].map(i => `${i}rem`)

// aligned to 4px grid, matches size scale
// @TODO should be framed to px? or this will become a multiplier scale?
export const lineHeights = [
  4, 8, 12, 16, 20, 24, 28, 32
]

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

lineHeights.s = lineHeights[2]
