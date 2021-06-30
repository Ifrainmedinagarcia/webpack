const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
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
				use: ['file-loader?name=assets/[name].[ext]'],
			},
			{
				test: /\.(ttf)$/i,
				use: ['file-loader?name=assets/[name].[ext]'],
			},
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin()
	]

}