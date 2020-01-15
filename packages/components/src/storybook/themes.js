
import { variants } from '../controls/button'
import { tokens, theme as themeCore } from '../theme/index'

/**
 * Contains additional themes for use with examples
 */

/**
 * Custom Button
 */
export const redlineButtonTheme = {
  ...themeCore,

  /**
   * Usage doc extras
   */
  buttons: {
    ...themeCore.buttons || {},
    ...variants.buttons,
    redline: {
      bg: 'transparent',
      color: 'red.500',
      borderColor: 'red.500',
      '&:hover': {
        bg: 'red.500',
        color: tokens.type.body.light
      },
      '&:active': {
        bg: 'red.600'
      }
    }
  }
}
