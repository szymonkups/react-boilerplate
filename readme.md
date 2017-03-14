# React boilerplate
Yet another React boilerplate.

## Uses
Includes:
 * Webpack 2.0, webpack-dev-server
 * React and JSX
 * SASS loading
 * Separate dev and production builds
 * Automatically creates correct `index.html` file from template.

TODO: 
 * React hot module replacement
 * Jest testing
 * Loading resources: images, svg etc.
 * Linting/hinting
 
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
npm run build
```
Bulds project in development mode under `build/` directory. JavaScript and CSS are bundled into one file.
___
```
npm run production
```
Builds project for production under `production/` directory. JavaScript is minimized, CSS is extracted to separate file to speed up loading.

