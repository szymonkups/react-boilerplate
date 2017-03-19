# React boilerplate
Yet another React boilerplate.

## Includes
 * React and JSX
 * Webpack 2.0
 * React hot module replacement
 * React router v4
 * Testing using Jest with code coverage
 * SASS loading
 * Separate dev and production builds
 * Separate minimized CSS file for production
 * Automatically creates correct `index.html` file from template
 * ESLint checking

TODO:
 * Loading resources: images, svg etc.
 * Redux
 * Redux Saga / Thunk
 
## Usage
Clone repository and install dependencies:
```
npm i
```

## Available commands
```
npm start
```
Starts webpack-dev-server.
___
```
npm run production
```
Builds project for production under `build/production/` directory. JavaScript is minimized, CSS is extracted to separate file to speed up loading.
___
```
npm test
```
Start testing with [Jest](https://facebook.github.io/jest/docs/configuration.html#rootdir-string) all files located inside `test/` directory.
For Jest configuration look inside `package.json`.
___
```
npm run coverage
```
Starts tests with code coverage.
___
```
npm run lint
```
Runs linting using [ESLint](http://eslint.org)
