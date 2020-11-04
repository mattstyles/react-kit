
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  backgrounds: {
    values: [
      { name: 'outrun', value: 'hsl(329, 100%, 54%)' },
      { name: 'dark', value: 'hsl(267, 39%, 15%)' },
      { name: 'alt', value: 'hsl(228, 100%, 99%)' }
    ]
  },
  // Grid does not honour zoom, so its always 8 px.
  grid: {
    cellSize: 8
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS
  },
  layout: 'fullscreen'
}
