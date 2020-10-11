
import test from 'ava'

import { mapObject } from './utils'

test('[theme/utils] applies a map function to object values', t => {
  const fixture = { foo: 'bar' }
  const expected = { foo: 'baz' }
  const obj = mapObject(fixture, key => 'baz')

  t.deepEqual(obj, expected, 'Maps over an object')
})
