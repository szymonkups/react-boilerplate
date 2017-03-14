const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require( 'path' );
const srcDir = path.resolve( __dirname, '../src' );
const buildDir =  path.resolve( __dirname, '../build/dev' );
const outputFileName = 'app.js';

module.exports = ( env ) => ( {
	entry: './src/index.js',
	output: {
		path: buildDir,
		filename: outputFileName
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: buildDir,
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
			template: path.join( srcDir, 'index.html' )
		} )
	]
} );