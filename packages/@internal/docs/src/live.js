
import React from 'react'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import styled, { ThemeProvider } from 'styled-components'
import { css } from '@styled-system/css'
import * as Kit from '@raid/kit'
import { theme } from '@raid-ui/theme'
import { theme as editorTheme } from './liveTheme'

const EditorPane = styled('div')(
  css({
    width: 'full',
    maxWidth: '640px',
    height: 14,
    overflow: 'hidden',
    overflowY: 'scroll',
    mt: 4,
    borderRadius: 3,

    '> div': {
      minHeight: 14
    }
  })
)

const ErrorPane = styled('div')(
  css({
    pre: {
      bg: 'background.100',
      px: 4,
      py: 2,
      borderRadius: 3,
      border: 'darken.100',
      color: 'critical.700'
    }
  })
)

const uiScope = { ...Kit }

export const Editor = ({
  code,
  scope
}) => {
  const sc = { ...uiScope, ...scope }
  return (
    <LiveProvider code={code} scope={sc} theme={editorTheme}>
      <ThemeProvider theme={theme}>
        <LivePreview />
        <EditorPane>
          <LiveEditor />
        </EditorPane>
        <ErrorPane>
          <LiveError />
        </ErrorPane>
      </ThemeProvider>
    </LiveProvider>
  )
}
Editor.defaultProps = {
  code: '<Text size=\'l\'>@TODO</Text>'
}
