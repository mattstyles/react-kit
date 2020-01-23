
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
        },
        lineout: props => {
          const colour = props.colour || 'gray'
          return {
            bg: 'transparent',
            color: `${colour}.500`,
            borderColor: `${colour}.500`,
            '&:hover': {
              bg: `${colour}.500`,
              color: tokens.type.body.light
            },
            '&:active': {
              bg: `${colour}.600`
            }
          }
        }
      },
      buttonSizes: {
        massive: props => {
          return {
            fontSize: 5,
            px: 4,
            py: 4,
            minWidth: 200
          }
        }
      }
    }
  }
)
