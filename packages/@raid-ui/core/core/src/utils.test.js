
import test from 'ava'

import { withUnit, withMs } from './utils'

test('withUnit appends a unit to a value', t => {
  const withRem = withUnit('rem')
  t.is(typeof withRem, 'function', 'withMs is curried')
  t.is(withRem(10), '10rem', 'ms is applied to a number')
  t.is(withRem('0.25'), '0.25rem', 'ms is applied to a string masquerading as a number')
  t.is(withRem('20rem'), '20rem', 'ms is not applied when unnecessary')
})

test('withMs applied an ms unit postfix to a value', t => {
  t.is(withMs(10), '10ms', 'ms is applied to a number')
  t.is(withMs('10'), '10ms', 'ms is applied to a string masquerading as a number')
  t.is(withMs('20ms'), '20ms', 'ms is not applied when unnecessary')
})
