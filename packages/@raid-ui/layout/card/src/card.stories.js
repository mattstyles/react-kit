
import {
  withKnobs, number
} from '@storybook/addon-knobs'
import React, { Fragment } from 'react'
import { addBase } from '@internal/storybook'
import { Spacer } from '@raid-ui/align'

import { Card } from './index'

export default {
  title: 'Components/Layout/Card',
  decorators: [
    addBase(),
    withKnobs
  ]
}

export const Basic = () => {
  return (
    <Card depth={number('Depth', 0, {
      range: true,
      min: 0,
      max: 5,
      step: 1
    })}
    >
      <h2>Heading</h2>
      <p>Body</p>
    </Card>
  )
}

export const Depth = () => {
  return (
    <>
      {Array(6).fill(0).map((_, i) => i).map(depth => {
        return (
          <Fragment key={`card_depth${depth}`}>
            <Card depth={depth}>
              <h2>{`Depth: ${depth}`}</h2>
              <p>Body</p>
            </Card>
            <Spacer py={3} />
          </Fragment>
        )
      })}
    </>
  )
}
