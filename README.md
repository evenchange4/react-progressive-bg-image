# react-progressive-bg-image

> Medium style progressive background image for React based on [Styled-components](https://github.com/styled-components/styled-components).

[![Travis][build-badge]][build] [![Codecov Status][codecov-badge]][codecov] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[![Dependency Status][dependency-badge]][dependency] [![devDependency Status][devDependency-badge]][devDependency] [![peerDependency Status][peerDependency-badge]][peerDependency]

[build-badge]: https://img.shields.io/travis/evenchange4/react-progressive-bg-image/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-progressive-bg-image

[npm-badge]: https://img.shields.io/npm/v/react-progressive-bg-image.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-progressive-bg-image

[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/react-progressive-bg-image.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/react-progressive-bg-image?branch=master

[npm-downloads]: https://img.shields.io/npm/dt/react-progressive-bg-image.svg?style=flat-square

[license-badge]: https://img.shields.io/npm/l/react-progressive-bg-image.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/

[dependency-badge]: https://david-dm.org/evenchange4/react-progressive-bg-image.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/react-progressive-bg-image
[devDependency-badge]: https://david-dm.org/evenchange4/react-progressive-bg-image/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/react-progressive-bg-image#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/react-progressive-bg-image/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/react-progressive-bg-image#info=peerDependencies
[![prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Demo

-   http://react-progressive-bg-image.netlify.com/
-   Responsive example: http://michaelhsu.tw/ [[Source code]](https://github.com/evenchange4/michaelhsu.tw/blob/master/src/components/CoverImage.js#L37-L44)

## Installation

```console
$ npm i react-progressive-bg-image styled-components@next --save
// or
$ yarn add react-progressive-bg-image styled-components@next
```

## Requirements

-   react `^15.5.4`
-   styled-components `^2.0.0-15`

## Usage

```js
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-bg-image';

const StyledProgressiveImage = styled(ProgressiveImage)`
  height: 600px;
  background-size: contain;
  background-position-y: center;
  background-position-x: center;
`;

<StyledProgressiveImage
  src={IMAGE}
  placeholder={IMAGEX60}
/>;
```

## Property

| **Prop**      |  **Type** |  **Required**  |  **Description** |
| ------------- | --------- | -------------- | ---------------- | 
| `src`         | string    | yes            | Origin image     |
| `placeholder` | string    | yes            | Small image      |

## Test

```
$ yarn run format
$ yarn run test:watch
```

---

## Inspiration

- https://github.com/FormidableLabs/react-progressive-image
- [How Medium does progressive image loading](https://jmperezperez.com/medium-image-progressive-loading-placeholder/)

## CONTRIBUTING

*   ⇄ Pull requests and ★ Stars are always welcome.
*   For bugs and feature requests, please create an issue.
*   Pull requests must be accompanied by passing automated tests (`$ yarn run test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)
