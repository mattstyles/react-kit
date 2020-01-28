
import rootStyled from 'styled-components'
import { css } from '@styled-system/css'

export const styled = element => {
  const component = rootStyled(element)
  return (...styles) => {
    const Component = component(
      ...styles,
      props => css(props.sx)
    )
    Component.styles = styles
    return Component
  }
}
