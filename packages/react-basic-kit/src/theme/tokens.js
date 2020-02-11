
// Should tokens live on the theme?
// Keep them separate so that they are used by variants and as defaults.
// They are alias tokens so they can be imported here rather than on the theme,
// when used to customise a component instance they’ll substitute in the theme
// scale tokens.
// @TODO Need a way to generate these from the theme though, they won't
// change as the theme changes -> moot, they don't directly reference the theme,
// just parts of it.
export const tokens = {
  type: {
    // ref: fontSizes
    // @TODO [3, 2] does not work :( how to make it work? So that we can have breakpoint tokens defined in the theme.
    baseSize: 2,

    body: {
      // ref: colors
      light: 'gray.100',
      dark: 'gray.700'
    },
    heading: {
      // ref: colors
      light: 'gray.75',
      dark: 'gray.800'
    }
  },

  layout: {
    // ref space/size
    padding: 4,

    // ref: radii
    rounding: 3
  }
}
