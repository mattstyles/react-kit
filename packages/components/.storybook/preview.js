
import { addParameters } from '@storybook/react'

addParameters({
  options: {
    showRoots: true
  },
  backgrounds: [
    { name: 'outrun', value: 'hsl(329, 100%, 54%)' },
    { name: 'dark', value: 'hsl(267, 39%, 15%)' }
  ],
  // Grid does not honour zoom, so its always 8 px.
  grid: {
    cellSize: 8
  }
})
