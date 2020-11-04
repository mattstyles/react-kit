
import styled, { ThemeProvider } from 'styled-components'
import { variant, compose, layout, color, border } from 'styled-system'
import { css } from '@styled-system/css'

import {
  View, Text, Blockquote, Code, Spacer,
  H2, H3, P, Pre, List, ListItem,
  theme as core
} from '../index'
import { addBase } from './index'

export default {
  title: 'Other/test',
  decorators: [
    addBase()
  ]
}

const Test = styled('div')(
  css({
    bg: 'critical.700'
  }),
  compose(
    layout,
    color,
    border
  )
)

// This yellow overrides any bg coming from the instance. :(
const CompoTest = styled(Test)(
  props => css({
    bg: 'warning.500',
    ...props.sx
  })
)

/**
 * variant testing
 */
const testVariants = props => ({
  primary: {
    bg: 'info.700',
    color: 'white'
  },
  secondary: {
    bg: 'papayawhip',
    color: 'black'
  },
  dark: t => {
    console.log('Custom dark variant theme:', t)
    console.log('Custom dark variant props:', props)
    return {
      bg: 'background.800',
      color: props.sparkling ? 'background.50' : 'background.400'
    }
  }
})

const colourVariants = props => variant({
  prop: 'variant',
  scale: 'testColours',
  variants: testVariants(props)
})

const colourVariantTheme = {
  ...core,
  testColours: {
    ...testVariants,
    outrun: {
      bg: 'indigo',
      color: 'magenta',
      // A function here means you can not accurately serialise the theme.
      // Is this a problem? _feels_ like it will be.
      textShadow: t => {
        console.log('function from theme:', t)
        return '0px 0px 4px hsla(300, 100%, 50%, 0.8)'
      }
    },
    wallflower: props => {
      // Doesn't work, this is the theme object, not instance props
      console.log('wallflower props:', props)
      return {
        bg: '#833433',
        color: '#CBC3BC',
        borderRadius: t => {
          console.log('wallflower theme access:', t)
          return 10
        }
      }
    }
  }
}

const ColourComponent = styled('div')(
  // base
  props => css(props.__css),
  // custom
  css({
    textSize: 5,
    m: 3,
    p: 4
  }),
  // variants
  colourVariants,
  // instance
  props => css(props.sx)
)

export const TestVariant = () => {
  return (
    <View>
      <P>Testing how to let a theme-specific variant respond to other instance props.</P>
      <ColourComponent>No variant supplied</ColourComponent>
      <ColourComponent variant='primary'>Primary</ColourComponent>
      <ColourComponent variant='secondary'>Secondary</ColourComponent>
      <ColourComponent variant='dark'>Dark</ColourComponent>
      <ColourComponent variant='dark' sparkling>Dark (sparkling)</ColourComponent>
      <ColourComponent variant='outrun'>Outrun (no custom theme)</ColourComponent>
      <ThemeProvider theme={colourVariantTheme}>
        <ColourComponent variant='outrun'>Outrun (specified in theme)</ColourComponent>
        <ColourComponent variant='wallflower'>Wallflower</ColourComponent>
      </ThemeProvider>
      <ColourComponent variant='primary' sx={{ borderRadius: 4 }}>Primary with custom instance props</ColourComponent>
      <ColourComponent variant='primary' sx={{ color: 'skyblue' }}>Primary with custom instance props (overriding variant)</ColourComponent>
    </View>
  )
}

/**
 * Style property tests
 */
export const StyleProps = () => (
  <View>
    <P>The following div I want to be purple</P>
    <P>Order of composition is important. Just put the composed style props after earlier css declaration and all is good.</P>
    <Test
      bg='rebeccapurple'
      color='white'
      width='200px'
      borderRadius={3}
      borderColor='background.600'
      borderWidth={3}
    >
      <Text color='white' p={2} block>I should be purple.</Text>
    </Test>
    <P>The following will not work and highlights three issues. Firstly, the order of specificity is such that instance props, such as the <Code>hotpink</Code> here, are lower specificity than the component css (<em>emotion</em> might solve this as it is to do with the <Code>styled</Code> function). Secondly, styled components has no method for stopping properties from slipping in to the HTML, using an sx prop stops react from throwing those props in to the DOM, which actually allows you to do it when you actually want to. Thirdly, this allows array syntax to add theme-aware media queries.</P>
    <CompoTest
      bg='hotpink'
    >
      <Text block p={2}>I should be pink.</Text>
    </CompoTest>
    <Spacer py={1} />
    <CompoTest
      sx={{
        bg: 'tomato',
        color: 'background.50',
        width: '50%'
      }}
    >
      <Text block p={2}>I should be red.</Text>
    </CompoTest>
  </View>
)

const Base = styled('div')(
  css({
    color: 'info.600'
  }),
  color
)

const Extended = styled(Base)(
  css({
    color: 'critical.700'
  })
)

const ExtendedDefault = styled(Base)({})
ExtendedDefault.defaultProps = {
  color: 'critical.700'
}

const ExtendedSx = styled(Base)(
  props => css({
    ...props.sx
  })
)
ExtendedSx.defaultProps = {
  sx: {}
}

export const SX = () => {
  return (
    <>
      <H2>The <Code>sx</Code> prop and specificity</H2>
      <Blockquote><strong>tl;dr</strong> use the <Code>sx</Code> prop rather than inline properties to style instance components.</Blockquote>
      <P>There are a couple of things at play with <Code>styled-components</Code> and how extended components apply their styling.</P>
      <List as='ol'>
        <ListItem>Instance properties are applied with a lower specificity.</ListItem>
        <ListItem>Properties get inlined in to the DOM, probably when you don’t want them there.</ListItem>
        <ListItem>Array syntax can be a little clunky but allows us to get theme-aware media queries working.</ListItem>
      </List>
      <H3>Examples:</H3>
      <Base>I want to be blue</Base>
      <P>The component:</P>
      <Pre>{`const Base = styled('div')(
  css({
    color: 'info.600'
  }),
  color
)`}
      </Pre>
      <Base color='rebeccapurple'>I want to be purple</Base>
      <P>The JSX to custom style this instance</P>
      <Pre>{'<Base color=\'rebeccapurple\'>I want to be purple</Base>'}</Pre>
      <P>This looks like it is set up nicely and you can supply a custom property in the JSX which gets applied correctly. So all good here (despite possible HTML pollution).</P>
      <P>Now consider extending that <Code>Base</Code> component to create a new one:</P>
      <Pre>{`const Extended = styled(Base)(
  css({
    color: 'critical.700'
  })
)`}
      </Pre>
      <Extended>I want to be red</Extended>
      <P>This component has corrected overridden the <Code>Base</Code> styling with its own colour (whilst also honouring the styled function which allows this, due to the order the functions in <Code>Base</Code> were specified)</P>
      <P>Let’s try to specify a custom instance colour though and see what happens:</P>
      <Pre>{'<Extended color=\'rebeccapurple\'>I want to be purple</Extended>'}</Pre>
      <Extended color='rebeccapurple'>I want to be purple</Extended>
      <P>Nuts.</P>
      <P>There are three functions at play here, and they get applied in a sensible order:</P>
      <Pre>{`const Base = styled('div')(
  css({ // 1
    bg: 'info.600'
  }),
  color // 2
)

const Extended = styled(Base)(
  css({ // 3
    bg: 'critical.700'
  })
)`}
      </Pre>
      <P>This order of execution is not unexpected and results in the following style declaration, again, not unexpected:</P>
      <Pre>{`.dxFEVz {
    background-color: #2d3748;
    background-color: rebeccapurple;
    color: hsl(0,0%,100%);
    background-color: #c62d42;
}`}
      </Pre>
      <P>Specificity is first-in-first-out from top to bottom, so the bottom one <em>wins</em> and the background is deep red.</P>
      <P>However, our intention here (albeit incorrectly) was to apply an over-ridable customisation to our extended component.</P>
      <P>There are at least 2 solutions to this problem:</P>
      <List>
        <ListItem>1a) Use default props on the <Code>Extended</Code> component.</ListItem>
        <ListItem>1b) Use a separate styling object.</ListItem>
      </List>
      <P>Let’s look at <Code>1a</Code> first as it is a simple solution, it’s idiomatic, and it clearly shows our intent to supply a default.</P>
      <Pre>{`const ExtendedDefault = styled(Base)({})
ExtendedDefault.defaultProps = {
  color: 'critical.700'
}`}
      </Pre>
      <ExtendedDefault>No props supplied, I want to red</ExtendedDefault>
      <ExtendedDefault color='rebeccapurple'>I want to be purple</ExtendedDefault>
      <P>Excellent, so this works. We now have a default colour supplied and it is extensible per instance.</P>
      <P>However, the downside is that we still have problems 1 and 2, namely, we’ll sometimes get properties inlined in to the DOM (with no way to control it) and array syntax for media query support gets clunkier.</P>
      <P>Solution 1b fixes all problems:</P>
      <Pre>{`const ExtendedSx = styled(Base)(
  props => css({
    ...props.sx
  })
)
ExtendedSx.defaultProps = {
  sx: {}
}`}
      </Pre>
      <ExtendedSx
        sx={{
          color: ['rebeccapurple', 'positive.500']
        }}
      >
        Purple on small screens, green on larger.
      </ExtendedSx>
      <P>This solution solves each of the problems:</P>
      <List as='ol'>
        <ListItem>Instance properties, via the <Code>sx</Code> prop, get higher specificity. This also allows us to colocate default styling for a component into the css declaration, this might not strictly be idiomatic React default properties but it models our intention and keeps styling within the realm of CSS (albeit via the styling functions/objects we are using to author it).</ListItem>
        <ListItem>We now place styling declarations into the <Code>sx</Code> object and won’t litter the DOM as they aren’t properties on the component itself. Furthermore, when we do want HTML attributes we can specify them explicitly on the component JSX, although bare in mind that if there are clashes they will still be applied by styling functions (they will be of lower specificity than <Code>sx</Code> declarations though if they result in CSS properties being applied.)</ListItem>
        <ListItem>This syntax for styling is arguably cleaner and so preferable anyway.</ListItem>
      </List>
      <P>This custom <Code>sx</Code> function is exposed via <Code>@raid/ui-core</Code></P>
      <Pre>{`import { sx } from '@raid/ui-core'
import styled from 'styled-components'

export const Foo = styled('div')(
  {
    color: 'aquamarine'
  },
  sx
)

export const Bar = styled(Foo)(sx)
`}
      </Pre>
      <P>In development mode you’ll notice all styles get written to style blocks, however, these get deduped in production. It is likely the functions will still be called, and then output deduplicated.</P>
    </>
  )
}
SX.story = {
  name: 'sx prop'
}
