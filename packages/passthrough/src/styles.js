
import styled from 'styled-components'
import { compose, space, color, layout } from 'styled-system'
import { css } from '@styled-system/css'

const sx = props => css(props.sx)

const withSx = element => {
  const component = styled(element)
  return (...styles) => {
    return component(
      ...styles,
      sx
    )
  }
}

// Can we just use a compose here, maybe a function would be better to allow
// the opportunity later to extend the api by adding params to the function.
const baseStyles = [
  // styled funcs i.e a styling api for component
  compose(
    color,
    space
  ),

  // custom styling for component
  css({
    m: 2,
    p: 2
  })
]
export const Base = styled('div')(
  ...baseStyles,
  sx
)
Base.styles = baseStyles

const extStyles = [
  ...Base.styles,
  // custom style api for new component
  layout,

  // custom styling for component
  // * there is still an order, so this still beats a bg='blue', however,
  // sx is the preferred api, which wins.
  css({
    bg: 'papayawhip'
  })
]
export const Extended = styled('div')(
  ...extStyles,
  sx
)
Extended.styles = extStyles
Extended.extend = (...styles) => {
  return styled('div')(
    ...extStyles,
    ...styles,
    sx
  )
}

const expoStyles = () => {
  return compose(
    css({
      bg: 'darkblue'
    })
  )
}
export const Expo = Extended.extend(
  expoStyles()
)

export const CompSx = withSx('div')(
  ...extStyles,
  css({
    width: '200px'
  })
)
