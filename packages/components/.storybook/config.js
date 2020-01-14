
import { configure, addDecorator } from '@storybook/react'

import { Base } from './base'

addDecorator(story => (
  <Base>{story()}</Base>
))

// const req = require.context('../src', true, /\.stories\.js$/)
const req = require.context('../src', true, /icons.*\.stories/)

configure(
  () => {
    return req.keys()
      .filter(_ => !/\/_/g.test(_))
      .map(req)
  },
  module
)
