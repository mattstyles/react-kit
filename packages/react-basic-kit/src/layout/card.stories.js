
import {
  withKnobs, number
} from '@storybook/addon-knobs'

import {
  View, Card, H2, P
} from '../index'

import { addBase } from '../storybook/index'

export default {
  title: 'Components/Layout/Card',
  decorators: [
    addBase(),
    withKnobs
  ]
}

export const Basic = () => {
  return (
    <View>
      <Card depth={number('Depth', 0, {
        range: true,
        min: 0,
        max: 6,
        step: 1
      })}
      >
        <H2 sx={{ mt: 0 }}>Heading</H2>
        <P sx={{ mb: 0 }}>Body</P>
      </Card>
    </View>
  )
}

export const Depth = () => {
  return (
    <View>
      {Array(6).fill(0).map((_, i) => i).map(depth => {
        return (
          <Card key={`card_depth${depth}`} depth={depth} sx={{ mt: 2 }}>
            <H2 sx={{ mt: 0 }}>{`Depth: ${depth}`}</H2>
            <P sx={{ mb: 0 }}>Body</P>
          </Card>
        )
      })}
    </View>
  )
}
