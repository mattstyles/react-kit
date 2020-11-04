
import { themeGet } from '@styled-system/theme-get'
import { context } from '@raid/ui-core'

const makeColoration = (a, b) => (props) => {
  const color1 = themeGet('colors.' + a, a)(props)
  const color2 = themeGet('colors.' + b, b)(props)
  return `linear-gradient(270deg, ${color1}, ${color2}, ${color2}, ${color1})`
}

const placeholders = {
  standard: props => {
    return {
      backgroundImage: makeColoration(props.color1, props.color2)(props),
      backgroundSize: '400% 100%'
    }
  },
  darken: props => {
    return {
      backgroundImage: makeColoration('dark.200', 'dark.300')(props),
      backgroundSize: '400% 100%'
    }
  },
  lighten: props => {
    return {
      backgroundImage: makeColoration('light.500', 'light.300')(props),
      backgroundSize: '400% 100%'
    }
  }
}

export const variants = context({
  prop: 'variant',
  scale: 'variants.placeholders',
  variants: placeholders
})
