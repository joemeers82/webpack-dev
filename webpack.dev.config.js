
const path                     = require('path');
const { CleanWebpackPlugin }   = require('clean-webpack-plugin');
const HtmlWebpackPlugin        = require('html-webpack-plugin');

module.exports = { 
	entry: {
		'hello-world': './src/hello-world.js',
		'mountain': './src/mountain.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: ''
	},
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		index: 'index.html',
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', 'css-loader', 'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env' ],
						plugins: [ 'transform-class-properties' ]
					}
				}
			},
			{
				test: /\.hbs$/,
				use: [
					'handlebars-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'hello-world.html',
			chunks: ['hello-world'],
			title: 'Hello world',
			template: 'src/page-template.hbs',
			description: 'Hello World'
		}),
		new HtmlWebpackPlugin({
			filename: 'mountain.html',
			chunks: ['mountain'],
			title: 'Mountain',
			template: 'src/page-template.hbs',
			description: 'Mountain'
		})
	]
}