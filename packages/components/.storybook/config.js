
import { configure, addDecorator } from '@storybook/react'

import { Base } from './base'

addDecorator(story => (
  <Base>{story()}</Base>
))

const req = require.context('../src', true, /\.stories\.js$/)

configure(
  () => {
    req.keys().forEach(filename => req(filename))
  },
  module
)
