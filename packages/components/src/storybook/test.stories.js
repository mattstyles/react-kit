
import styled from 'styled-components'
import { compose, layout, color, border } from 'styled-system'
import { css } from '@styled-system/css'

import {
  View, Text, Blockquote, Code,
  H2, H3, P, Pre, List, ListItem
} from '../index'
import { Surround, addBase } from './index'

const Test = styled('div')(
  css({
    bg: 'red.700'
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
    bg: 'yellow.500',
    ...props.sx
  })
)

export default {
  title: 'Components|test',
  decorators: [
    addBase()
  ]
}

export const StyleProps = () => (
  <View>
    <Surround>
      <Text>The following div I want to be purple</Text>
      <Text>Ok, order of composition is important. Just put the composed style props after earlier css declaration and all is good.</Text>
      <Test
        bg='rebeccapurple'
        color='white'
        width='200px'
        borderRadius={3}
        borderColor='gray.600'
        borderWidth={3}
      >
        <Text color='white' mt={2} p={2} block>I should be purple.</Text>
      </Test>
      <Text block my={2}>The following will not work and highlights three issues. Firstly, the order of specificity is such that instance props, such as the <Code>hotpink</Code> here, are lower specificity than the component css (<em>emotion</em> might solve this as it is to do with the <Code>styled</Code> function). Secondly, styled components has no method for stopping properties from slipping in to the HTML, using an sx prop stops react from throwing those props in to the DOM, which actually allows you to do it when you actually want to. Thirdly, this allows array syntax to add theme-aware media queries.</Text>
      <CompoTest
        bg='hotpink'
      >
        <Text block p={2} mt={2}>I should be pink.</Text>
      </CompoTest>
      <CompoTest
        sx={{
          bg: 'tomato',
          color: 'gray.50',
          width: '50%'
        }}
      >
        <Text block p={2} mt={2}>I should be red.</Text>
      </CompoTest>
    </Surround>
  </View>
)

const Base = styled('div')(
  css({
    color: 'blue.600'
  }),
  color
)

const Extended = styled(Base)(
  css({
    color: 'red.700'
  })
)

const ExtendedDefault = styled(Base)({})
ExtendedDefault.defaultProps = {
  color: 'red.700'
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
    color: 'blue.600'
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
    color: 'red.700'
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
    bg: 'blue.600'
  }),
  color // 2
)

const Extended = styled(Base)(
  css({ // 3
    bg: 'red.700'
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
  color: 'red.700'
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
          color: ['rebeccapurple', 'green.500']
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
    </>
  )
}
SX.story = {
  name: 'sx prop'
}
