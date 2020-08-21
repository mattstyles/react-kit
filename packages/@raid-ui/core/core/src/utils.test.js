
// import test from '@ava/babel'
const test = require('ava')

// import { withUnit, withMs } from './index'
// const { withUnit, withMs } = require('./utils')

test('passes', t => {
  t.pass()
})

// test('withUnit appends a unit to a value', t => {
//   // t.plan(4)
//
//   const withRem = withUnit('rem')
//   t.is(typeof withRem, 'function', 'withMs is curried')
//   t.is(withRem(10), '10rem', 'ms is applied to a number')
//   t.is(withRem('0.25'), '0.25rem', 'ms is applied to a string masquerading as a number')
//   t.is(withRem('20rem'), '20rem', 'ms is not applied when unnecessary')
// })
//
// test.skip('withMs applied an ms unit postfix to a value', t => {
//   t.plan(3)
//
//   t.equals(withMs(10), '10ms', 'ms is applied to a number')
//   t.equals(withMs('10'), '10ms', 'ms is applied to a string masquerading as a number')
//   t.equals(withMs('20ms'), '20ms', 'ms is not applied when unnecessary')
// })
