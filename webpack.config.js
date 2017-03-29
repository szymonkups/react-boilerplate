/* eslint-env node */

// Project paths configuration.
const commonConfig = {
	// Path to app sources.
	sourcePath: './src/',

	// App starting point. Should be relative to sourcePath.
	startPoint: 'index.js',

	// Location where to store production build.
	prodPath: './build/production/',

	// Location where to store development build.
	devPath: './build/dev/',

	// Output filename. It will be created relative to prodPath and devPath.
	output: 'app.js',

	// Styles filename used in production. It will be created relative to prodPath.
	outputCSS: 'style.css',

	// File used to create index.html file for development and production builds. Should be relative to sourcePath.
	htmlTemplate: 'index.html'
};

const env = process.env.NODE_ENV == 'production' ? 'prod' : 'dev';

// Export correct configuration file.
module.exports = require( `./config/webpack.${ env }.config.js` )( commonConfig );
