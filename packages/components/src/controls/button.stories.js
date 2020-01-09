
import { action } from '@storybook/addon-actions'

import { Button } from './button'

export default {
  title: 'Components|Controls/Button'
}

export const Basic = () => {
  return (
    <>
      <Button onClick={action('Click')}>Click me</Button>
    </>
  )
}
