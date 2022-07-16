const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
	},
	output: {
		filename: "bundle.[contenthash].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					// url false to properly resolve img paths
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
			//load files for <img> tag
			{
				test: /\.(png|jpg|gif|svg)$/,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]',
				},
			},
			//load url for scss bg-img
			// {
				
			// 	test: /\.(png|jpg|gif|svg)$/,
			// 	loader: 'url-loader'
				
			// }
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve("src", "index.html"),
		}),
		new HtmlWebpackPlugin({
			filename: "./brushes.html",
			template: "./src/pages/brushes.html",
		}),
		new HtmlWebpackPlugin({
			filename: "./formulas.html",
			template: "./src/pages/formulas.html",
		}),
		new HtmlWebpackPlugin({
			filename: "./inspirations.html",
			template: "./src/pages/inspirations.html",
		}),
		new HtmlWebpackPlugin({
			filename: "./map.html",
			template: "./src/pages/map.html",
		}),
		new HtmlWebpackPlugin({
			filename: "./miscellaneous.html",
			template: "./src/pages/miscellaneous.html",
		}),
		new HtmlWebpackPlugin({
			filename: "./archivas.html",
			template: "./src/pages/archivas.html",
		}),
		new HtmlWebpackPlugin({
			filename: "./selections.html",
			template: "./src/pages/selections.html",
		}),
		new CopyPlugin({
			patterns: [
				{
					from: "src/assets/img/inspirations",
					to: "images/inspirations",
				},
				{
					from: "src/assets/img/archivas",
					to: "images/archivas",
				},
			],
		}),
	],
};
