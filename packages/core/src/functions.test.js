
import tape from 'tape'

import { sf } from './index'

tape('module should export an sf object for styled functions', t => {
  t.plan(2)

  t.equal(typeof sf, 'object', 'sf object exported')
  t.ok(sf.sx, 'sx function applied to sf namespace')
})
