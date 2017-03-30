// Webpack configuration for production environment.
/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = ( config ) => {
	const extractSass = new ExtractTextPlugin( {
		filename: config.outputCSS
	} );

	return {
		entry: path.resolve( config.sourcePath, config.startPoint ),
		output: {
			path: path.resolve( __dirname, '..', config.prodPath ),
			filename: config.output,
			publicPath: '/'
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
					use: extractSass.extract( {
						use: [
							{ loader: 'css-loader', options: { minimize: true } },
							{ loader: 'sass-loader' }
						],
						fallback: 'style-loader'
					} )
				},

				// Image files.
				{
					test: /\.(jpg|png|svg)$/,
					loader: 'file-loader',
					options: {
						name: './assets/images/[hash].[ext]'
					},
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin( {
				'process.env': {
					'NODE_ENV': JSON.stringify( 'production' )
				}
			} ),

			// Uglify JavaScript files.
			new UglifyJSPlugin( {
				beautify: false,
				comments: false,
			} ),

			// Extract SASS to separate file.
			extractSass,

			// Create index.html.
			new HtmlWebpackPlugin( {
				template: path.resolve( config.sourcePath, config.htmlTemplate ),
				minify: {
					collapseWhitespace: true
				}
			} )
		]
	}
};
