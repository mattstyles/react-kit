
import styled from 'styled-components'

const styles = {
  color: 'rebeccapurple'
}

export const Box = styled('div')(
  props => ({
    background: props.bg || 'hotpink',
    ...styles
  })
)
Box.displayName = 'Ali'

export const Test = (props) => {
  return (
    <div>{props.children}</div>
  )
}
