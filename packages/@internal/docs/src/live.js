
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

const PreviewPane = styled('div')(
  props => css({
    border: props.showPreviewBorder && 'darken.300',
    borderBottom: 'none',
    borderTopRadius: 3,
    borderBottomRadius: props.showPreviewBorder ? 0 : 3,
    p: 4
  })
)

const EditorPane = styled('div')(
  props => css({
    maxHeight: 14,
    overflow: 'hidden',
    overflowY: 'scroll',
    mt: props.showPreviewBorder ? 0 : 4,
    borderTopRadius: props.showPreviewBorder ? 0 : 3,
    borderBottomRadius: 3,
    fontSize: 4
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

export const Live = ({
  code,
  scope,
  showPreviewBorder
}) => {
  const sc = { ...uiScope, ...scope }
  return (
    <LiveProvider code={code} scope={sc} theme={editorTheme}>
      <ThemeProvider theme={theme}>
        <PreviewPane showPreviewBorder={showPreviewBorder}>
          <LivePreview />
        </PreviewPane>
        <EditorPane showPreviewBorder={showPreviewBorder}>
          <LiveEditor />
        </EditorPane>
        <ErrorPane>
          <LiveError />
        </ErrorPane>
      </ThemeProvider>
    </LiveProvider>
  )
}
Live.defaultProps = {
  code: '<Text size=\'l\'>@TODO</Text>',
  showPreviewBorder: true
}
