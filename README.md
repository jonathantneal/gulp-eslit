# Gulp ESLit [<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript Logo" width="90" height="90" align="right">][ESLit]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]

[Gulp ESLit] is a [Gulp] plugin that lets you create templates with embedded
JavaScript expressions using [ESLit].

```jsx
<!-- some/template.html -->
<h1>${ heading }</h1>
<table>
  ${ people.map((person) => `<tr>
    <td>${ person.given }</td>
    <td>${ person.family }</td>
  </tr>`) }
</table>
```

ESLit templates are easy to use because they’re nothing more than web
standardized [ES6 Template Strings] with [Promise] support.

```js
gulp.task('html', () => gulp.src(
  'some/template.html'
).pipe(
  require('gulp-eslit')
).pipe(
  gulp.dest('./dist')
);
```

Keeps things simple.

```html
<h1>Guest List</h1>
<table>
  <tr>
    <td>Martin</td>
    <td>Brody</td>
  </tr><tr>
    <td>Bruce</td>
    <td>Shark</td>
  </tr>
</table>
```

## Usage

Add [Gulp ESLit] to your build tool.

```sh
npm install gulp-eslit --save-dev
```

```js
require('gulp-eslit')(data, options);
```

- **data**: the data used by the template.
- Options
  - **cwd**: the path used by imports (default: `process.cwd()`).
  - **prefixes**: the file prefixes sometimes used by imports (default: `[ "_" ]`).
  - **extensions**: the file extensions sometimes used by imports (default: `[ ".html", ".jsx" ]`).
  - **globopts**: the options passed into [node-glob].

*Notes*:

- *Paths are relative to the current file or the current working directory.*
- *Paths may use glob patterns or omit prefixes and extensions*
- *Node modules are supported, using the package `template` or `main` keys, or by using `index.html`*

---

## Syntax Helpers

##### Sublime Text

1. Install the **[Babel](https://packagecontrol.io/packages/Babel)** Package.
- Select **Tools** > **Developer** > **New Syntax**.
-  Paste [this syntax].
-  Save the file as `Lit Template (Babel).sublime-syntax`.

[Gulp ESLit]: https://github.com/jonathantneal/gulp-eslit
[ESLit]: https://github.com/jonathantneal/eslit
[ES6 Template Strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[Gulp]: https://github.com/gulpjs/gulp
[Promise]: https://www.promisejs.org/
[this syntax]: https://github.com/jonathantneal/eslit/blob/master/Lit%20Template%20(Babel).sublime-syntax

[npm-url]: https://www.npmjs.com/package/gulp-eslit
[npm-img]: https://img.shields.io/npm/v/gulp-eslit.svg
[cli-url]: https://travis-ci.org/jonathantneal/gulp-eslit
[cli-img]: https://img.shields.io/travis/jonathantneal/gulp-eslit.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/gulp-eslit.svg
