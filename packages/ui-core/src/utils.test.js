
import tape from 'tape'

import { withUnit, withMs } from './index'

tape('withUnit appends a unit to a value', t => {
  t.plan(4)

  const withRem = withUnit('rem')
  t.equals(typeof withRem, 'function', 'withMs is curried')
  t.equals(withRem(10), '10rem', 'ms is applied to a number')
  t.equals(withRem('0.25'), '0.25rem', 'ms is applied to a string masquerading as a number')
  t.equals(withRem('20rem'), '20rem', 'ms is not applied when unnecessary')
})

tape('withMs applied an ms unit postfix to a value', t => {
  t.plan(3)

  t.equals(withMs(10), '10ms', 'ms is applied to a number')
  t.equals(withMs('10'), '10ms', 'ms is applied to a string masquerading as a number')
  t.equals(withMs('20ms'), '20ms', 'ms is not applied when unnecessary')
})
