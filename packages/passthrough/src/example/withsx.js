
import styled from 'styled-components'
import { css } from '@styled-system/css'

export const withSx = element => {
  const component = styled(element)
  return (...styles) => {
    return component(
      ...styles,
      props => css(props.sx)
    )
  }
}
