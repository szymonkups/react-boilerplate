// Webpack configuration for development environment.
/* eslint-env node */

const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const webpack = require( 'webpack' );

module.exports = ( config ) => ( {
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:9000',
		'webpack/hot/only-dev-server',

		path.resolve( config.sourcePath, config.startPoint )
	],
	output: {
		path:  path.resolve( __dirname, '..', config.devPath ),
		filename: config.output,
		publicPath: '/'
	},

	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		contentBase: config.devPath,
		port: 9000,
		historyApiFallback: true
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
		} ),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	]
} );
