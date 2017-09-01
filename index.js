// internal tooling
import path from 'path';

// external tooling
import eslit from 'eslit';
import { PluginError } from 'gulp-util';
import { obj as through2Obj } from 'through2';

// gulp eslit
export default (data, opts) => through2Obj(
	(file, enc, cb) => {
		if (file.isStream()) {
			throw new PluginError('gulp-eslit', 'Streaming not supported');
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
				throw new PluginError('gulp-eslit', error);
			}
		);
	}
);
