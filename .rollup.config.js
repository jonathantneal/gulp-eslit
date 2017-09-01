// external tooling
import rollupPluginBabel from 'rollup-plugin-babel';
import rollupPluginNodeResolve from 'rollup-plugin-node-resolve';
import babelPresetEnv from 'babel-preset-env';
import babelPluginExternalHelpers from 'babel-plugin-external-helpers';

// export rollup configuration
export default {
	external: [
		'eslit',
		'gulp-util',
		'path',
		'through2'
	],
	plugins: [
		rollupPluginNodeResolve(),
		rollupPluginBabel({
			babelrc: false,
			plugins: [
				babelPluginExternalHelpers
			],
			presets: [
				[
					babelPresetEnv,
					{
						modules: false
					}
				]
			]
		})
	]
};
