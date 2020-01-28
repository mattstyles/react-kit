
import tape from 'tape'

import { styled } from './index'

tape('styled api should match styled-components', t => {
  t.plan(3)

  const element = 'div'
  const sc = styled(element)
  t.equal(typeof sc, 'function', 'styled returns a function')

  const component = sc()
  t.ok(/^styled/.test(component.displayName), 'styled component style display name')
  t.ok(new RegExp(element).test(component.displayName), 'supplied element forms part of the display name')
})

tape('styled should append the sx function', t => {
  t.plan(4)

  const comp1 = styled('div')()
  t.equal(comp1.componentStyle.rules.length, 1, 'component has a rules array')

  const styles = { padding: 1 }
  const comp2 = styled('div')(styles)
  t.equal(typeof comp2.componentStyle.rules[0], 'string', 'parsed style rules are applied')
  t.equal(typeof comp2.componentStyle.rules[1], 'function', 'a function is appended')
  t.ok(/sx/.test(comp2.componentStyle.rules[1].toString()), 'function contains sx identifier')
})
