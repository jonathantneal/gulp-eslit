// tooling
const fs = require('fs');
const gulp = require('gulp');
const gulpESLit = require('.');
const through = require('through2');

const expect = fs.readFileSync('./test/basic.expect.html', 'utf-8');

// default
gulp.task(
	'default',
	() => gulp.src(
		'test/basic.html'
	).pipe(
		gulpESLit({
			heading: Promise.resolve('Guest List'),
			people: [{
				given: 'Martin',
				family: 'Brody'
			}, {
				given: 'Bruce',
				family: 'Shark'
			}]
		}, {
			test: true
		})
	).pipe(
		through.obj(
			(file, enc, cb) => {
				const result = file.contents.toString('utf-8');

				return expect === result
				? cb(null, file)
				: cb(
					guErr('Streaming not supported') // eslint-disable-line no-undef
				);
			}
		)
	)
);
