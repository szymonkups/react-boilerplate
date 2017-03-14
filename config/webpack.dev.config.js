const path = require( 'path' );

module.exports = ( env ) => ( {
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, '../build' ),
		filename: 'app.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join( __dirname, '../build' ),
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
	}
} );