'use strict';

const path = require('path');
const webpack = require('webpack');
const { loaders } = require('@ckeditor/ckeditor5-dev-utils');
const { CKEditorTranslationsPlugin } = require('@ckeditor/ckeditor5-dev-translations');
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

	plugins: [
		new CKEditorTranslationsPlugin({
			language: 'ru',
			additionalLanguages: ['ru', 'en'],
			includeCorePackageTranslations: false,
			buildAllTranslationsToSeparateFiles: false,
			addMainLanguageTranslationsToAllAssets: true
		})
	],

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
			loaders.getIconsLoader({ matchExtensionOnly: true }),
			loaders.getStylesLoader({
				themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
				minify: true
			}),
			loaders.getTypeScriptLoader()
		]
	},

	resolve: {
		extensions: ['.ts', '.js', '.json']
	}
};