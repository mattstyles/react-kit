
# react-markdown-kit

> Uses `@raid/basic-kit` components to render markdown

[![npm](https://img.shields.io/npm/v/@raid/markdown-kit.svg?style=flat-square)](https://www.npmjs.com/package/react-markdown-kit)
[![minzip size](https://img.shields.io/bundlephobia/minzip/@raid/markdown-kit?style=flat-square)](https://bundlephobia.com/result?p=@raid/markdown-kit)
[![Dependencies](https://img.shields.io/david/mattstyles/react-kit?path=packages%2Fmarkdown-kit&style=flat-square)](https://david-dm.org/mattstyles/react-kit?path=packages%2Fmarkdown-kit)
[![Peer Dependencies](https://img.shields.io/david/peer/mattstyles/react-kit?path=packages%2Fmarkdown-kit&style=flat-square)](https://david-dm.org/mattstyles/react-kit?path=packages%2Fmarkdown-kit&type=peer)
[![License](https://img.shields.io/github/license/mattstyles/react-kit.svg?style=flat-square)](https://github.com/mattstyles/react-kit/blob/master/license.md)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

## Getting Started

Install with [yarn](https://yarnpkg.com) or [npm](https://npmjs.com)

```sh
yarn add @raid/markdown-kit
```

```sh
npm i -S @raid/markdown-kit
```

The markdown component converts markdown into DOM via React components which tie in with the `@raid/basic-kit` components.

```js
import { Markdown } from '@raid/markdown-kit'
import { md } from './content.md'

render(
  <Markdown>{md}</Markdown,
  document.body
)
```

The `elements` property can be used to specify which components to use for which bits of Markdown. It uses [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) under the hood so [mdx](https://mdxjs.com/) is also supported.

## Contributing

Pull requests are always welcome, the project uses the [standard](http://standardjs.com) code style. Please run `npm test` to ensure all tests are passing and add tests for any new features or updates.

For bugs and feature requests, [please create an issue](https://github.com/mattstyles/react-kit/issues).

See the root [readme](https://github.com/mattstyles/react-kit) for more information about how the repository is structured.

## License

MIT
