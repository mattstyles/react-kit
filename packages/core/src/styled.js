
import rootStyled from 'styled-components'

import { sx } from './functions'

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
