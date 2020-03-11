
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme as core } from 'react-basic-kit'

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
