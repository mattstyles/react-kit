
import styled from 'styled-components'

const styles = {
  color: 'tomato'
}

export const Box = styled('div')(
  props => ({
    background: props.bg || 'hotpink',
    ...styles
  })
)
Box.displayName = 'Tyson'

export const Test = (props) => {
  return (
    <div>{props.children}</div>
  )
}
