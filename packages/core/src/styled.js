
import rootStyled from 'styled-components'

import { sx } from './functions'

// const expandStyleFunction = style => {
//   return typeof style === 'function' ? style() : style
// }

export const styled = element => {
  const component = rootStyled(element)
  return (...styles) => {
    const Component = component(
      ...styles,
      sx
    )
    Component.styles = styles
    return Component
  }
}
