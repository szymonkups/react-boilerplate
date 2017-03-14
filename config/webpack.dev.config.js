const path = require( 'path' );

module.exports = ( env ) => ( {
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, '../build' ),
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
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		]
	}
} );