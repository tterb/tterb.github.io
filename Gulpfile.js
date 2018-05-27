var gulp = require('gulp'),
    csso = require('gulp-csso'),
    sass = require('gulp-sass'),
    uncss = require('gulp-uncss'),
    cp = require('child_process'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/*
 * Build the Jekyll Site
 * runs a child process in node that runs the jekyll commands
 */
gulp.task('jekyll-build', function(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn(jekyllCommand, ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/*
 * Rebuild Jekyll & reload browserSync
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});

/*
 * Build the jekyll site and launch browser-sync
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/*
* Compile and minify sass
*/
gulp.task('sass', function() {
  gulp.src(['src/sass/*.scss','src/sass/**/*.scss'])
    .pipe(plumber())
    .pipe(sass({
      includePaths: ['src/sass'],
      onError: browserSync.notify
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    // .pipe(uncss({
      // html: ['_site/*.html','_site/**/*.html'],
      // ignore: []
    // }))
    .pipe(csso())
    .pipe(browserSync.reload({ stream:true }))
    .pipe(gulp.dest('assets/css/'));
});

/*
* Compile fonts
*/
gulp.task('fonts', function() {
  gulp.src('src/fonts/**/*.{otf,ttf,eot,woff,woff2,css}')
  .pipe(plumber())
  .pipe(gulp.dest('assets/fonts/'));
})

/*
 * Minify images
 */
gulp.task('imagemin', function() {
  return gulp.src('src/img/**/*.{jpg,png,gif,webp}')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/img/'));
});

/**
 * Compile and minify js
 */
gulp.task('js', function(){
  return gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
    .pipe(browserSync.reload({ stream:true }))
});

gulp.task('watch', function() {
  gulp.watch(['src/sass/*.scss','src/sass/**/*.scss'], ['sass']);
  // gulp.watch('_sass/**/*.scss', ['sass', 'jekyll-rebuild']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/fonts/**/*.{tff,woff,woff2}', ['fonts']);
  gulp.watch(['src/img/*.{jpg,png,gif}','src/img/**/*.{jpg,png,gif}'], ['imagemin']);
  // gulp.watch(['**/*.*', '!_site/**/*', '!node_modules/**/*','!.sass-cache/**/*' ], ['jekyll-rebuild']);
  gulp.watch(['**/*.html', '_layouts/*.html', '_includes/*.html', '_posts/*'], ['jekyll-rebuild']);
});

gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

// gulp.task('default', ['js', 'sass', 'fonts', 'browser-sync', 'watch']);
gulp.task('default', ['browser-sync', 'watch'])
