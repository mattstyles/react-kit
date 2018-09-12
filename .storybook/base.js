
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import oc from 'open-color'

const maxDemoSize = 440

// @TODO update with theme props
const GlobalStyle = createGlobalStyle`
  html: {
    font-size: 10px;
  }

  body {
    margin: 0;
    background: ${oc.gray[1]};
    color: ${oc.gray[8]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;

    @media (min-width: ${maxDemoSize}px) {
      background: ${`linear-gradient(30deg, ${oc.orange[3]}, ${oc.red[7]} 75%)`};
    }
  }

  .main {
    display: flex;
    flex: 1;
  }
`

export const App = styled('div')`
  display: flex;
  flex: 1;
  max-width: ${maxDemoSize}px;

  @media (min-width: ${maxDemoSize}px) {
    position: absolute;
    width: 375px;
    height: 667px;
    border: 16pxz solid rgba(0, 0, 0, 0.85);
    border-radius: 8px;
    margin-left: 20px;
    margin-top: 20px;
  }
`

// @TODO use theme from src
export const Base = ({ children }) => (
  <ThemeProvider theme={{}}>
    <App>
      <GlobalStyle />
      {children}
    </App>
  </ThemeProvider>
)
