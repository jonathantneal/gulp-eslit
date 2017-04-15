// tooling
const eslit = require('eslit');
const gutil = require('gulp-util');
const path = require('path');
const through = require('through2');

// gulp eslit
module.exports = ({ data, opts } = {}) => through.obj(
	(file, enc, cb) => {
		if (file.isStream()) {
			throw new gutil.PluginError('gulp-eslit', 'Streaming not supported');
		} else if (file.isNull()) {
			return cb(null, file);
		}

		return eslit.parse(
			file.contents.toString(enc),
			Object.assign({}, data),
			Object.assign({
				cwd: path.dirname(file.path)
			}, opts)
		).then(
			(content) => {
				file.contents = new Buffer(content);

				return cb(null, file);
			},
			(error) => {
				throw new gutil.PluginError('gulp-eslit', error);
			}
		);
	}
);
