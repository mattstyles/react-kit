
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { css } from '@styled-system/css'
import { FaExternalLinkAlt, FaPlus } from 'react-icons/fa'

import { addBase } from '../storybook/index'
import {
  Button, withSx,
  View, Pane, Flex, Box, Screen, Spread,
  Text, Card
} from '../'

export default {
  title: 'Examples/Layout',
  decorators: [
    addBase({
      Layout: ({ children }) => <Screen sx={{ bg: 'gray.100' }}>{children}</Screen>
    })
  ]
}

const Header = styled(Flex)(
  props => css({
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    py: themeGet('tokens.layout.padding')(props) - 1,
    boxShadow: 1,
    flexDirection: 'row',
    zIndex: 1,
    bg: 'white'
  })
)

const Insert = withSx(styled(Flex))(
  props => css({
    width: '100%',
    maxWidth: ['100%', '52rem', '64rem'],
    px: themeGet('tokens.layout.padding')(props),
    mx: 'auto',
    flexDirection: 'row'
  })
)

const Block = styled(Card)(
  css({
    p: 0,
    mb: 4
  })
)

const BlockSection = styled(Box)(
  css({
    p: [3, 4],
    '& + &': {
      borderTop: 'light.200'
    }
  })
)

const BlockTitle = styled(Text)(
  props => css({
    p: [3, 4],
    fontSize: 'l',
    lineHeight: 'l',
    fontWeight: '600',
    letterSpacing: 'narrow',
    bg: 'gray.75',
    color: themeGet('tokens.type.heading.dark')(props),
    display: 'block',
    borderBottom: 'light.200'
  })
)

const SectionTitle = styled(Text)(
  css({
    fontSize: 'l',
    lineHeight: 'l',
    fontWeight: '600',
    letterSpacing: 'narrow',
    display: 'block',
    mb: 2
  })
)

const Anchor = withSx(styled(Button))(
  css({
    color: 'primary',
    border: 'none'
  })
)
Anchor.defaultProps = {
  as: 'a',
  variant: 'naked'
}

export const Dashboard = () => {
  return (
    <View>
      <Header>
        <Insert>
          <Text as='h1' size='xl'>Dashboard</Text>
        </Insert>
      </Header>
      <Insert sx={{ mt: 8 }}>
        <Pane split sx={{ flexDirection: ['column', 'row'] }}>
          <Pane as='main' sx={{ mb: 4, mr: [0, 4] }}>
            <Block>
              <BlockTitle>Activity</BlockTitle>
              <BlockSection>
                <Spread>
                  <Spread>
                    <FaPlus />
                    <Text sx={{ ml: 4 }}><Anchor href='#'>User</Anchor> added</Text>
                  </Spread>
                  <Text sx={{ color: 'gray.600' }}>12 days ago</Text>
                </Spread>
              </BlockSection>
              <BlockSection>
                <Spread>
                  <Spread>
                    <FaExternalLinkAlt />
                    <Text sx={{ ml: 4 }}><Anchor href='#'>example.com</Anchor> domain added</Text>
                  </Spread>
                  <Text sx={{ color: 'gray.600' }}>5 months ago</Text>
                </Spread>
              </BlockSection>
              <BlockSection>
                <Spread>
                  <Spread>
                    <FaExternalLinkAlt />
                    <Text sx={{ ml: 4 }}><Anchor href='#'>kit.com</Anchor> domain added</Text>
                  </Spread>
                  <Text sx={{ color: 'gray.600' }}>5 months ago</Text>
                </Spread>
              </BlockSection>
              <BlockSection>
                <Spread>
                  <Spread>
                    <FaPlus />
                    <Text sx={{ ml: 4 }}><Anchor href='#'>Example</Anchor> app created</Text>
                  </Spread>
                  <Text sx={{ color: 'gray.600' }}>6 months ago</Text>
                </Spread>
              </BlockSection>
              <BlockSection>
                <Spread>
                  <Spread>
                    <FaPlus />
                    <Text sx={{ ml: 4 }}><Anchor href='#'>User</Anchor> added</Text>
                  </Spread>
                  <Text sx={{ color: 'gray.600' }}>8 months ago</Text>
                </Spread>
              </BlockSection>
            </Block>
          </Pane>
          <Pane as='aside' flex={0.4}>
            <Block>
              <BlockTitle as='h2'>Resources</BlockTitle>
              <BlockSection>
                <SectionTitle as='h3'>Training</SectionTitle>
                <Text as='div'>Access training on the go using the offline-ready Console App.</Text>
                <Anchor href='#' sx={{ my: 1 }} align><span>Learn more</span> <FaExternalLinkAlt /></Anchor>
              </BlockSection>
            </Block>
            <Block>
              <BlockTitle as='h2'>Explore</BlockTitle>
              <BlockSection>
                <SectionTitle as='h3'>Deployments</SectionTitle>
                <Text as='div'>Super charge your deployments with dedicated tooling.</Text>
                <Anchor href='#' sx={{ my: 1 }} align><span>Learn more</span> <FaExternalLinkAlt /></Anchor>
              </BlockSection>
              <BlockSection>
                <SectionTitle as='h3'>Storage</SectionTitle>
                <Text as='div'>Reduce cloud storage by up to 85% with our deep machine learning solution.</Text>
                <Anchor href='#' sx={{ my: 1 }} align><span>Learn more</span> <FaExternalLinkAlt /></Anchor>
              </BlockSection>
              <BlockSection>
                <SectionTitle as='h3'>Network</SectionTitle>
                <Text as='div'>Manage your connections with confidence using our Network Management tooling.</Text>
                <Anchor href='#' sx={{ my: 1 }} align><span>Learn more</span> <FaExternalLinkAlt /></Anchor>
              </BlockSection>
            </Block>
            <Block>
              <BlockTitle as='h2'>Feedback</BlockTitle>
              <BlockSection>
                <Anchor href='#'>Submit feedback</Anchor>
                <Text> to tell us about your experience.</Text>
              </BlockSection>
            </Block>
          </Pane>
        </Pane>
      </Insert>
    </View>
  )
}
