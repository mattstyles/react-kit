
import { keyframes } from 'styled-components'

/**
 * Note that animations must be specified last on the consuming component.
 * https://github.com/styled-components/styled-components/issues/1934#issuecomment-531112341
 * https://github.com/styled-components/styled-components/issues/2561
 * Check 5.x roadmap for updates
 */

export const pulse = keyframes({
  from: {
    backgroundPosition: '200% 0'
  },
  to: {
    backgroundPosition: '-200% 0'
  }
})
