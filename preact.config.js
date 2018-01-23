const { DefinePlugin } = require('webpack');
require('./shims');

module.exports = function (config, env) {
	let { options } = config.module.loaders.filter(obj => obj.loader === 'babel-loader')[0];
	options.plugins.push('syntax-dynamic-import');

	config.plugins.push(
		new DefinePlugin({
			'process.env.GA_ID': JSON.stringify('UA-XXXXXXXX-X')
		})
	);
}
