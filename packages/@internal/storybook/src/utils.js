
import { Base } from './base'
import { Layout } from './layouts'

// import core from '@raid-ui/theme/theme.json'
import { theme as core } from '@raid-ui/theme'

const defaults = {
  theme: core,
  Layout: Layout
}

export const addBase = ({
  theme,
  Layout
} = defaults) => story => {
  return (
    <Base theme={theme}>
      <Layout>
        {story()}
      </Layout>
    </Base>
  )
}
