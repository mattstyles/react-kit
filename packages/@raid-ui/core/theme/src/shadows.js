
import { darkAlpha, blue } from './colours'

export const shadows = {
  ...[
    '0px 0px transparent',
    `0 1px 2px 0 ${darkAlpha[200]}, 0 2px 3px -1px ${darkAlpha[200]}`,
    `0 2px 4px 0px ${darkAlpha[200]}, 0 4px 6px -1px ${darkAlpha[200]}, 0 12px 16px 0px ${darkAlpha[100]}`,
    `0 4px 8px -1px ${darkAlpha[200]}, 0 12px 20px 0px ${darkAlpha[200]}`,
    `0 8px 12px -1px ${darkAlpha[200]}, 0 16px 24px -1px ${darkAlpha[100]}, 0 20px 28px 0px ${darkAlpha[100]}`,
    `0 16px 24px -1px ${darkAlpha[200]}, 0 20px 28px 0px ${darkAlpha[100]}`
  ],
  textOnLight: `0 1px ${darkAlpha[300]}`,
  focusRing: `${blue[400]} 0px 0px 0px 0.1875rem`,
  insetControl: `inset 0px 1px 2px 1px ${darkAlpha[100]}, 0px 0px transparent`
}
