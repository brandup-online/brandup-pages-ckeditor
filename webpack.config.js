'use strict';

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: path.resolve(__dirname, 'src', 'ckeditor.ts'),

	output: {
		// The name under which the editor will be exported.
		library: 'ContentEditor',
		path: path.resolve(__dirname, 'build'),
		filename: 'ckeditor.js',
		libraryTarget: 'umd',
		libraryExport: 'default',
		clean: true
	},

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: true,
					keep_classnames: true,
					keep_fnames: true,
					format: {
						comments: false
					}
				},
				extractComments: false
			})
		]
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'string-replace-loader',
				options: {
					search: 'verifyLicenseKey(this);',
					replace: '',
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true
				}
			}
		]
	},

	resolve: {
		extensions: ['.ts', '.js', '.json']
	}
};
