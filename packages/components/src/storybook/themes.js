
import { tokens, utils } from '../theme/index'

const { extend } = utils

/**
 * Contains additional themes for use with examples
 */

/**
 * Custom Button
 */
export const redlineButtonTheme = extend(
  {
    /**
     * Extend the main variants using the extend helper
     */
    // buttons: {
    //   ...core.buttons || {},
    //   ...variants.buttons,
    //   redline: {
    //     bg: 'transparent',
    //     color: 'red.500',
    //     borderColor: 'red.500',
    //     '&:hover': {
    //       bg: 'red.500',
    //       color: tokens.type.body.light
    //     },
    //     '&:active': {
    //       bg: 'red.600'
    //     }
    //   }
    // },

    variants: {
      buttons: {
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
  }
)
