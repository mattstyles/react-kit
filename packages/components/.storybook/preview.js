
import { addParameters } from '@storybook/react'

addParameters({
  backgrounds: [
    { name: 'outrun', value: 'hsl(329,100%,54%)' }
  ],
  // Grid does not honour zoom, so its always 8 px.
  grid: {
    cellSize: 8
  }
})
