
# @raid-ui/theme

> Base theme object for @raid-ui


[![npm](https://img.shields.io/npm/v/@raid-ui/theme?style=flat-square)](https://www.npmjs.com/package/@raid-ui/theme)
[![minzip size](https://img.shields.io/bundlephobia/minzip/@raid-ui/theme?style=flat-square)](https://bundlephobia.com/result?p=@raid-ui/theme)
[![License](https://img.shields.io/github/license/mattstyles/react-kit.svg?style=flat-square)](https://github.com/mattstyles/react-kit/blob/master/license.md)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Part of [React-kit](https://github.com/mattstyles/react-kit).

## Getting Started

```js
import { ThemeProvider } from 'styled-components'
// import theme from '@raid-ui/theme/theme.json'
import { theme } from '@raid-ui/theme'


<ThemeProvider theme={theme}>...</ThemeProvider>
```

A serialised json is exposed via `@raid-ui/theme/theme.json` but note that currently some of the theme are functions, which can not be serialised. This will currently base some typographic styling, possibly some component variants too. Importing the object form directly will work.
