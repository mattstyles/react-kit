
# @raid/theme

> Base theme object for raid UI kits

[![npm](https://img.shields.io/npm/v/@raid/theme?style=flat-square)](https://www.npmjs.com/package/@raid/theme)
[![License](https://img.shields.io/github/license/mattstyles/react-kit.svg?style=flat-square)](https://github.com/mattstyles/react-kit/blob/master/license.md)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

## Getting Started

Install with [yarn](https://yarnpkg.com) or [npm](https://npmjs.com)

```sh
yarn add @raid/theme
```

```sh
npm i -S @raid/theme
```

@TODO basic usage example

## Contributing

Pull requests are always welcome, the project uses the [standard](http://standardjs.com) code style. Please run `yarn test` to ensure all tests are passing and add tests for any new features or updates.

For bugs and feature requests, [please create an issue](https://github.com/mattstyles/react-kit/issues).

See the root [readme](https://github.com/mattstyles/react-kit) for more information about how the repository is structured.

## License

MIT

_Note:_

JS allows keyed properties on an array. This is not valid JSON. However, using numeric keys on an object is. So scales that were previously an array will now be an object with numeric keys, which should work fine with most systems (like styled-system) that are expecting arrays.

_Note:_

Uses rem everywhere for type and spacing. Global style clamps the html at 62.5% so that rem scale is off of a base10 which makes life much easier for anyone working with the library.
However, there is some potential interoperability issues with some other systems that also use rems but might not expect the manipulation of sizes. To fix this we use rem everywhere, this means the base scale is up to you, however, if you _don't_ put 62.5% on the html/body then things from this lib might appear too large (1.6x too large). The answer is to use different base scales, which means we need a way to generate it.
Actually we won't muck with the default font sizing, its a pain to work with but for better interoperability we should default to 100%, not 62.5%.
