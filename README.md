# React boilerplate
Yet another React boilerplate.

## Includes
 * Webpack 2.0, webpack-dev-server
 * React and JSX
 * Testing with Jest, code coverage
 * SASS loading, separate CSS file for production
 * Separate dev and production builds
 * Automatically creates correct `index.html` file from template.

TODO: 
 * React hot module replacement
 * Loading resources: images, svg etc.
 * Linting/hinting.
 * Minimize CSS for production.
 * Redux.
 * React router, ( `v3` vs `v4` )
 
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
npm run dev
```
Bulds project in development mode under `build/dev/` directory. JavaScript and CSS are bundled into one file.
___
```
npm run prod
```
Builds project for production under `build/prod/` directory. JavaScript is minimized, CSS is extracted to separate file to speed up loading.
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
