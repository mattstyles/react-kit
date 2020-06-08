
import { themeGet } from '@styled-system/theme-get'

// These are decent enough default styling but if you want to use markdown
// heavily in your project, and not use these elements elsewhere then some of
// margins might want a bit of work, which would be fairly unique to the use
// case. i.e. the headings do not quite sit correctly with these defaults as
// a situation h1->h2->p _probably_ has more spacing than you want. However,
// as a general purpose system (particularly where you don't nest headings)
// these defaults work well and maintain good alignment.
export const type = {
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
