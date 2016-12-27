const gulp = require('gulp')
const eslint = require('gulp-eslint')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const changed = require('gulp-changed')
const nodemon = require('gulp-nodemon')
const path = require('path')

const paths = {
  sources: [
    'src/**/*.js',
    'tests/**/*.js',
  ],
  copy: [
    'package.json',
  ],
  outDir: 'dist',
  srcDir: 'src',
  runScript: 'dist/src/server.js',
}

// Copies files that are necessary for running into ./dist folder.
gulp.task('copy', () =>
  gulp.src(paths.copy, { base: '.' })
    .pipe(changed(paths.outDir))
    .pipe(gulp.dest(paths.outDir))
)

// Compiles source files with babel and puts results into the `dist` folder.
// Configuration options of babel are specified in the .babelrc file.
gulp.task('compile', ['copy'], () =>
  gulp.src(paths.sources, { base: '.' })
    .pipe(changed(paths.outDir))
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', { mapSources: file => path.basename(file) }))
    .pipe(gulp.dest(paths.outDir))
)

gulp.task('lint', () =>
  gulp.src([...paths.sources, 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
)

gulp.task('watch', ['compile'], () => nodemon({
  script: paths.runScript,
  watch: paths.sources,
  tasks: ['compile'],
}))
