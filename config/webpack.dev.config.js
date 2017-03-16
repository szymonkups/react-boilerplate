// Webpack configuration for development environment.
/* eslint-env node */

const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = ( config ) => ( {
	entry: path.resolve( config.sourcePath, config.startPoint ),
	output: {
		path: config.devPath,
		filename: config.output
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: config.devPath,
		compress: true,
		port: 9000
	},
	module: {
		rules: [
			// JavaScript files.
			{
				test: /\.js$/,
				use: 'babel-loader'
			},

			// SASS files.
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		]
	},
	plugins: [
		// Create index.html.
		new HtmlWebpackPlugin( {
			template: path.resolve( config.sourcePath, config.htmlTemplate )
		} )
	]
} );
