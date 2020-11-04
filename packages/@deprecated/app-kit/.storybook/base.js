
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import styled, { ThemeProvider } from 'styled-components'
import { withSx } from '@raid/ui-core'
import { GlobalStyle, theme as core, Box } from '@raid/basic-kit'

export const Base = ({
  theme,
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
Base.defaultProps = {
  theme: core
}

export const addBase = (Layout) => story => {
  const content = Layout
    ? () => <Layout>{story()}</Layout>
    : story
  return (
    <Base>
      {content()}
    </Base>
  )
}

export const Layout = withSx(styled(Box))(
  props => css({
    width: ['100%', '30rem', '36rem'],
    mx: 'auto',
    px: [
      themeGet('tokens.layout.padding')(props) + 2,
      themeGet('tokens.layout.padding')(props)
    ],
    py: themeGet('tokens.layout.padding')(props) + 2,
    boxSizing: 'border-box'
  })
)
