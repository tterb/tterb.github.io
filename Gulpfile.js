// Gulpfile.js

const autoprefixer = require('autoprefixer');
const browserSync  = require('browser-sync').create();
const cleancss     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const del          = require('del');
const gulp         = require('gulp');
const gutil        = require('gulp-util');
const imagemin     = require('gulp-imagemin');
const pngquant     = require('imagemin-pngquant');
const notify       = require('gulp-notify');
const postcss      = require('gulp-postcss');
const rename       = require('gulp-rename');
const run          = require('gulp-run');
const runSequence  = require('run-sequence');
const sass         = require('gulp-ruby-sass');
const uglify       = require('gulp-uglify');

// Include paths file
const paths = require('./_assets/gulp-config/paths');

// Process styles, add vendor-prefixes, minify, then
// output the file to the appropriate location
gulp.task('build:styles:main', function() {
  return sass(paths.sassFiles + '/main.scss', {
    style: 'compressed',
    trace: true,
    loadPath: [paths.sassFiles]
  }).pipe(postcss([autoprefixer({ browsers: ['last 2 versions']}) ]))
    .pipe(cleancss())
    .pipe(gulp.dest(paths.jekyllCssFiles))
    .pipe(gulp.dest(paths.siteCssFiles))
    .pipe(browserSync.stream())
    .on('error', gutil.log);
});

// Create and process critical CSS file to be included in head.html
gulp.task('build:styles:critical', function() {
  return sass(paths.sassFiles + '/critical.scss', {
    style: 'compressed',
    trace: true,
    loadPath: [paths.sassFiles]
  }).pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(cleancss())
    .pipe(gulp.dest('_includes'))
    .on('error', gutil.log);
});

// Build all styles
gulp.task('build:styles', ['build:styles:main', 'build:styles:critical']);

// Delete CSS
gulp.task('clean:styles', function(callback) {
  del([paths.jekyllCssFiles + 'main.css',
    paths.siteCssFiles + 'main.css',
    '_includes/critical.css'
  ]);
  callback();
});

// Concatenate and uglify global JS files and output the
// result to the appropriate location
gulp.task('build:scripts:global', function() {
  return gulp.src([
    paths.jsFiles + '/lib' + paths.jsPattern,
    paths.jsFiles + '/*.js'
  ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.jekyllJsFiles))
    .pipe(gulp.dest(paths.siteJsFiles))
    .on('error', gutil.log);
});

// Uglify local JS files and output the result to the
// appropriate location
gulp.task('build:scripts:local', function() {
  return gulp.src(paths.jsFiles + '/local' + paths.jsPattern)
    .pipe(uglify())
    .pipe(gulp.dest(paths.jekyllJsFiles))
    .pipe(gulp.dest(paths.siteJsFiles))
    .on('error', gutil.log);
});

// Build all scripts
gulp.task('build:scripts', ['build:scripts:local', 'build:scripts:global', 'build:scripts:local']);

// Delete processed JS
gulp.task('clean:scripts', function(callback) {
  del([paths.jekyllJsFiles + 'main.js', paths.siteJsFiles + 'main.js']);
  callback();
});

// Copy fonts
gulp.task('build:fonts', ['fonts']);

// Place fonts in proper location
gulp.task('fonts', function() {
  return gulp.src(paths.fontFiles + '/**/**.*')
    .pipe(rename(function(path) {path.dirname = '';}))
    .pipe(gulp.dest(paths.jekyllFontFiles))
    .pipe(gulp.dest(paths.siteFontFiles))
    .pipe(browserSync.stream())
    .on('error', gutil.log);
});

// Delete processed font files
gulp.task('clean:fonts', function(callback) {
  del([paths.jekyllFontFiles, paths.siteFontFiles]);
  callback();
});

// Optimize and copy image files
gulp.task('build:images', function() {
  return gulp.src(paths.imageFilesGlob)
    .pipe(imagemin({ 
      optimizationLevel: 3, 
      progressive: true, 
      interlaced: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.jekyllImageFiles))
    .pipe(gulp.dest(paths.siteImageFiles))
    .pipe(browserSync.stream());
});

// Delete processed images
gulp.task('clean:images', function(callback) {
  del([paths.jekyllImageFiles, paths.siteImageFiles]);
  callback();
});

// Place download files in proper location
gulp.task('build:downloads', function() {
  return gulp.src(paths.downloadFiles + '/**/*.zip')
    .pipe(rename(function(path) {path.dirname = '';}))
    .pipe(gulp.dest(paths.jekyllDownloadFiles))
    .pipe(gulp.dest(paths.siteDownloadFiles))
    .pipe(browserSync.stream())
    .on('error', gutil.log);
});

// Delete processed download files
gulp.task('clean:downloads', function(callback) {
  del([paths.jekyllDownloadFiles, paths.siteDownloadFiles]);
  callback();
});

// Run jekyll build command
gulp.task('build:jekyll', function() {
  return gulp.src('')
    .pipe(run('bundle exec jekyll build --config _config.yml'))
    .on('error', gutil.log);
});

// Delete the entire _site directory
gulp.task('clean:jekyll', function(callback) {
  del(['_site']);
  callback();
});

// Run jekyll build command using local config
gulp.task('build:jekyll:local', function() {
  return gulp.src('')
    .pipe(run('bundle exec jekyll build'))
    .on('error', gutil.log);
});

// Special tasks for building and reloading BrowserSync
gulp.task('build:jekyll:watch', ['build:jekyll:local'], function(callback) {
  browserSync.reload();
  callback();
});

gulp.task('build:scripts:watch', ['build:scripts'], function(callback) {
  browserSync.reload();
  callback();
});

// Serve site and watch files
gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: paths.siteDir,
    ghostMode: false, // Toggle to mirror clicks, reloads etc (performance)
    logFileChanges: true,
    logLevel: 'debug',
    open: true       // Toggle to auto-open page when starting
  });
  gulp.watch(['_config.yml'], ['build:jekyll:watch']);
  // Watch .scss files and pipe changes to browserSync
  gulp.watch('_assets/styles/**/*.scss', ['build:styles']);
  // Watch .js files
  gulp.watch('_assets/js/**/*.js', ['build:scripts:watch']);
  // Watch image files and pipe changes to browserSync
  gulp.watch('_assets/img/**/*', ['build:images']);
  // Watch posts
  gulp.watch('_posts/**/*.+(md|markdown|MD)', ['build:jekyll:watch']);
  // Watch drafts if --drafts flag was passed
  if (module.exports.drafts) {
    gulp.watch('_drafts/*.+(md|markdown|MD)', ['build:jekyll:watch']);
  }
  // Watch html and markdown files
  gulp.watch(['**/*.+(html|md|markdown|MD)', '!_site/**/*.*'], ['build:jekyll:watch']);
  // Watch RSS feed
  gulp.watch('feed.xml', ['build:jekyll:watch']);
  // Watch data files
  gulp.watch('_data/**.*+(yml|yaml|csv|json)', ['build:jekyll:watch']);
});

// Build site
gulp.task('build', function(callback) {
  runSequence(['build:scripts', 'build:images', 'build:styles', 'build:fonts', 'build:downloads'], 'build:jekyll', callback);
});

// Deletes _site directory and processed assets
gulp.task('clean', ['clean:jekyll', 'clean:styles', 'clean:scripts', 'clean:images', 'clean:fonts', 'clean:downloads']
);

// Default Task: build site
gulp.task('default', ['build']);
