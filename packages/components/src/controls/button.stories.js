
import { action } from '@storybook/addon-actions'

import { Button } from './button'

import { theme } from '../'
console.log(theme)

export default {
  title: 'Components|Controls/Button'
}

export const Basic = () => {
  return (
    <>
      <Button onClick={action('Click')}>Click me</Button>
      <h3>Variants</h3>
      <Button>Default</Button>
      <Button variant='solid'>Primary</Button>
      <Button variant='transparent'>Transparent</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='link'>Link</Button>
      <h3>Colour</h3>
      <Button>Default</Button><br /><br />
      <Button colour='red'>Red</Button>
      <Button colour='green'>Green</Button>
      <Button colour='blue'>Blue</Button>
      <Button colour='yellow'>Yellow</Button><br /><br />
      <Button colour='red' variant='outline'>Red</Button>
      <Button colour='green' variant='outline'>Green</Button>
      <Button colour='blue' variant='outline'>Blue</Button>
      <Button colour='yellow' variant='outline'>Yellow</Button>
      <h3>Size</h3>
      <Button size='small'>Small</Button>
      <Button>Default</Button>
      <Button size='large'>Large</Button>
      <h3>Rounding</h3>
      <Button>Default</Button>
      <Button rounding='square'>Square</Button>
      <Button rounding='rounded'>Rounded</Button>
      <Button rounding='pill'>Pill</Button>
      <h3>Misc</h3>
      <Button width='160px'>Text overflow to multiple lines</Button>
      <Button disabled>Disabled</Button>
      <p>Minimum width so that small buttons retain some shape</p>
      <Button>Ok</Button>
    </>
  )
}

export const FullWidth = () => {
  return (
    <>
      <Button fit>Full width</Button>
      <Button fit size='large' mt={2}>Large full width</Button>
      <Button fit rounding='pill' mt={2}>Pill full width</Button>
      <Button width='full' mt={2}>Full width prop</Button>
    </>
  )
}
