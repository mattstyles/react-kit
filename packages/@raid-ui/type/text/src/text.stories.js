
import { addBase } from '@internal/storybook'

import { Text } from './index'
import { theme } from '@raid-ui/theme'

export default {
  title: 'Components/Type/Text',
  decorators: [addBase()]
}

export const Basic = () => (
  <>
    <Text>Base text, styling inherited from body via the reset</Text>
  </>
)

export const Sizes = () => (
  <>
    {
      Object.keys(theme.fontSizes).map(size => {
        return (
          <Text
            key={`fontsize:${size}`}
            as='div'
            size={size}
          >
            {`Font size: ${size}`}
          </Text>
        )
      })
    }
  </>
)
