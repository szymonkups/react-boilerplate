const path = require( 'path' );
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const webpack = require( 'webpack' );

// Use ExtractTextPlugin to extracs SASS to separate file.
const extractSass = new ExtractTextPlugin( {
	filename: 'style.css'
} );

module.exports = ( env ) => ( {
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, '../production' ),
		filename: 'app.js'
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
						{ loader: 'css-loader' },
						{ loader: 'sass-loader' }
					],
					fallback: 'style-loader'
				} )
			}
		]
	},
	plugins: [
		// Adding proper env variable.
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( 'production' )
		} ),

		// Uglify JavaScript files.
		new UglifyJSPlugin( {
			beautify: false,
			comments: false,
		} ),

		extractSass
	]
} );