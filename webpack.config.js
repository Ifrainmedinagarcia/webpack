const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { Chunk } = require('webpack')

module.exports = {
	entry: {
		js: "./src/index.js",
		react: "./src/index_react.js",
		ts: "./src/index_ts.js"
	},
	output: {
		filename: "[name].[chunkhash].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/i,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true
					}
				}
				]
			},
			{
				test: /\.css$/i,
				//use: [MiniCssExtractPlugin.loader, 'css-loader'],
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						publicPath: "./"
					}
				},
					"css-loader"
				],
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg|webp)$/i,
				use: ['file-loader?name=assets/[name].[ext]', "image-webpack-loader"],
			},
			{
				test: /\.(ttf)$/i,
				use: ['file-loader?name=assets/[name].[ext]'],
			},
		]
	},
	plugins: [
		/* 		new HtmlWebPackPlugin({
					template: './public/index.html',
					filename: './index.html'
				}), */
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html',
			chunks: ["js"],
			hash: true
		}),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index_react.html',
			chunks: ["react"],
			hash: true
		}),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index_ts.html',
			chunks: ["ts"],
			hash: true
		}),
		new MiniCssExtractPlugin()
	]

}