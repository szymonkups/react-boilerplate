# React boilerplate
Yet another React boilerplate.

## Uses
Includes:
 * Webpack 2.0, webpack-dev-server
 * React and JSX
 * SASS loading, separate CSS file for production
 * Separate dev and production builds
 * Automatically creates correct `index.html` file from template.

TODO: 
 * React hot module replacement
 * Jest testing
 * Loading resources: images, svg etc.
 * Linting/hinting
 * Create common webpack configuration
 * Minimize CSS for production
 * Redux
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

