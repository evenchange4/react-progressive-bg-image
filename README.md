# react-progressive-bg-image

> Medium style progressive background image for React based on [Styled-components](https://github.com/styled-components/styled-components).
> 
> Further reading: [Reproducing Medium Style Progressive Image Loading for React](https://medium.com/@evenchange4/reproducing-medium-style-progressive-image-loading-for-react-2e83bba0c608).

[![Travis][build-badge]][build] [![Codecov Status][codecov-badge]][codecov] [![npm package][npm-badge]][npm] [![npm downloads][npm-downloads]][npm] [![license][license-badge]][license]

[![Dependency Status][dependency-badge]][dependency] [![devDependency Status][devDependency-badge]][devDependency] [![peerDependency Status][peerDependency-badge]][peerDependency]

[![Greenkeeper badge](https://badges.greenkeeper.io/evenchange4/react-progressive-bg-image.svg)](https://greenkeeper.io/)
[![prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Demo

-   http://react-progressive-bg-image.netlify.com/
-   Responsive example: http://michaelhsu.tw/ [[Source code]](https://github.com/evenchange4/michaelhsu.tw/blob/master/src/components/CoverImage.js#L37-L44)

![DEMO](./docs/demo.gif)

## Installation

```console
$ npm i react-progressive-bg-image styled-components --save
// or
$ yarn add react-progressive-bg-image styled-components
```

## Requirements

-   node >= 8.0.0
-   npm >= 5.0.0
-   yarn >= 0.24.6

-   react `^15.5.4`
-   styled-components `^2.0.0`

## Usage

### Case 1: Inline-style

> Remind: May need to setup autoprefixer in your project.

```js
import ProgressiveImage from 'react-progressive-bg-image';

<ProgressiveImage
  src={image1}
  placeholder={image1X60}
  style={{
    height: 600,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
  }}
/>
```

### Case 2: With Styled-components

```js
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-bg-image';

const StyledProgressiveImage = styled(ProgressiveImage)`
  height: 600px;
  background-size: contain;
  background-position: center center;

  /* Overrided */
  transition: filter 1s linear;
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
| `placeholder` | string    | yes            | Small image (Suggest inline base64)   |

## Test

```
$ yarn run format
$ yarn run eslint
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
