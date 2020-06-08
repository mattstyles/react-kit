
import { themeGet } from '@styled-system/theme-get'
import { extend } from '@raid/ui-core'

import { theme } from '../theme'

/**
 * Contains additional themes for use with examples
 */

/**
 * Custom Button
 */
export const redlineButtonTheme = extend(theme)(
  {
    /**
     * Extend the main variants using the extend helper
     */
    variants: {
      buttons: {
        redline: props => ({
          bg: 'transparent',
          color: 'critical.500',
          borderColor: 'critical.500',
          '&:hover': {
            bg: 'critical.500',
            color: themeGet('tokens.type.body.inverse')(props)
          },
          '&:active': {
            bg: 'critical.600'
          }
        }),
        lineout: props => {
          const colour = props.colour || 'background'
          return {
            bg: 'transparent',
            color: `${colour}.500`,
            borderColor: `${colour}.500`,
            '&:hover': {
              bg: `${colour}.500`,
              color: themeGet('tokens.type.body.inverse')(props)
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
