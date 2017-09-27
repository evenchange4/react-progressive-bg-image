# Changelog

## [HEAD]
> Unreleased


## [v2.1.1]
> Sep 27, 2017

* fix(travis): npm release bug

## [v2.1.0]
> Sep 27, 2017

* chore(ncu): update jest-styled-components to 4
* chore(eslint): introduce airbnb & prettier eslint configs

* chore(travis): setup auto release
* docs(LICENSE): add LICENSE file
* chore(package): ncu update React 16
* style: update prettier & extract prettier config
* chore(env): use node 8.6.0 & yarn 1.1.0 & add nvmrc for netlify

## [v2.0.4]
> Jul 04, 2017

* fix(Image): remove useless props from BaseComponent.
* chore(ncu): update styled-components to 2.1.1

## [v2.0.3]
> Jul 03, 2017

* fix(Image): `src` override priority issue.

## [v2.0.2]
> Jul 03, 2017

* feat(Img): Support for other Component based with `component` props.

**BackgroundImage will cause flicking while changing at safari.**

## [v2.0.1]

Publish fail.

## [v2.0.0]
> Jul 03, 2017

* feat(cache): add new cache feature ([#24])

### BREAKING CHANGES

```diff
<ProgressiveImage
  src={image1}
  placeholder={image1X60}
  blur={2}
  opacity={0.9}
+ transition="all 1s linear"
  style={{
    height: 600,
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
-   transition: 'all 1s linear',
  }}
/>,
```

## [v1.1.4]
> Jul 01, 2017

* fix(Image): missing close url `)`.

## [v1.1.3]
> Jul 01, 2017

* chore(ncu): bump dependencies
* feat(props): support for custom blur / opacity / scale props.

## [v1.1.2]
> Jun 30, 2017

* fix(SC): move dynamic props to style for safari flick issue

## [v1.1.1]
> May 31, 2017

* chore(env): use node 8 / npm 5 / styled-components 2 / storybook 3

## [v1.1.0]
> May 23, 2017

* chore(packages): yarn upgrade jest codecov prop-types rxjs
* test(jest-styled-components): introduce css snapshot
* chore(storybook): upgrade to `3.0.0-alpha.4`

## [v1.0.7]
> May 06, 2017

* refactor(recompose): switch to `mapPropsStream`.
* chore(styled-components): update to rc.

## [v1.0.6]
> May 04, 2017

* fix(rx): add test for loading the second image at same time.

## [v1.0.5]
> May 03, 2017

* test(rx): add marble testing
* feat(style): add inline-style example.

## [v1.0.4]
> May 03, 2017

* feat(normalize.css): upgrade to 7.0.0
* chore(packages): yarn upgrade

## [v1.0.3]
> May 02, 2017

* feat(eslint): setup eslint.
* docs(README): add gif demo.

## [v1.0.2]
> May 02, 2017

* fix(Component): props name conflict 

## [v1.0.1]
> May 02, 2017

* Setup travis CI and netlify.
* Update readme.md
* Setup jest for testing.

## [v1.0.0]
> May 02, 2017

* first release
