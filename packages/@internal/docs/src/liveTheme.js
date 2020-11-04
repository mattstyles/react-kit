
import { theme as base } from '@raid-ui/theme-outrun'

export const theme = {
  plain: {
    color: base.colors.text[75],
    backgroundColor: base.colors.background[75]
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: { color: 'rgb(189, 147, 249)' }
    },
    {
      types: ['inserted', 'function'],
      style: { color: base.colors.info[600] }
    },
    {
      types: ['deleted'],
      style: { color: 'rgb(255, 85, 85)' }
    },
    {
      types: ['changed'],
      style: { color: 'rgb(255, 184, 108)' }
    },
    {
      types: ['punctuation', 'symbol'],
      style: { color: base.colors.text[600] }
    },
    {
      types: ['string', 'char', 'tag', 'selector'],
      style: { color: base.colors.critical[400] }
    },
    {
      types: ['keyword', 'variable'],
      style: { color: base.colors.warning[500] }
    },
    {
      types: ['comment'],
      style: { color: base.colors.text[500] }
    },
    {
      types: ['attr-name'],
      style: { color: base.colors.positive[400] }
    }
  ]
}
