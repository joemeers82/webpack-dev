/*
* @Author: Joe Meers Jankowski
* @Date:   2019-06-22 10:17:00
* @Last Modified by:   Joe Meers Jankowski
* @Last Modified time: 2019-06-22 12:18:10
*/
const path = require('path');


module.exports = { 
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: 'dist/'
	},
	mode: 'none',
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
			}
		]
	}
}