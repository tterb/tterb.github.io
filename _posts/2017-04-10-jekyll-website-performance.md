---
priority: 0.5
title: Jekyll Website Performance
desc: Some insight into how to improve the performance of your Jekyll website 
date: 2017-04-10
categories: blog
options: halfhead
image: web-performance.png
tags:
  - jekyll
  - blog
  - website
  - performance
  - speed
  - google
  - PageSpeed
  - gulp
  - grunt
  - css
  - scss
  - javascript
  - CloudFlare
---

  Upon launching my new redesigned website, I've been spending the some time optimizing the site performance and load speeds using **[Google PageSpeed Insights]**.  
  Therefore, I thought I would take a second to share with you my discoveries and also recommend a few helpful resources for improving the performance of your own Jekyll website.  
  Using these methods, I have managed to receive the following PageSpeed rating. Though this is still a work-in-progress, and I will be adding [updates](#update) as I explore this topic further. 

<p align="center">
  <img src="https://user-images.githubusercontent.com/16360374/27520456-f313f3de-59c0-11e7-81ce-40273d1ffcbb.png" width="800" alt="PageSpeed" style="margin-bottom:0.5em"/>
</p>

  <p class="h-note" style="margin-bottom:3em">In an effort not to repeat the information in the articles listed below, I'll only share findings that weren't explicitly discussed in any of the following resources.</p>

### Optimize your own images
  As with most websites, when I first launched the new design, the biggest hindrance to my websites loading speed was the size of the images on my page. Though, after observing the disappointing quality of the *"optimized"* images provided by PageSpeed Insights, I instead elected to use **[GIMP]** to manually decrease and compress my images to preserve the image quality until PageSpeeds requirements were satisfied.  
  I would highly recommend doing the same, particularly for images that are featured in multiple places throughout your website.  

<hr> 

### Resources:
  * **[Scoring 100 on Google’s PageSpeed Insights with Jekyll]**
  * **[How to get your Jekyll + GitHub pages website to pass Google's PageSpeed Tests]**
  * **[Optimized Jekyll site with Grunt]**

<hr>

### The Results
  Here's my resulting Gulpfile, You can download, modify and use my current gulpfile optimization automation script via this **[gist]**.

```javascript
var gulp = require('gulp'),
    shell = require('gulp-shell'),
    minifyHTML = require('gulp-minify-html'),
    sass = require('gulp-sass'),
    importCss = require('gulp-import-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uncss = require('gulp-uncss'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    glob = require('glob'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    jpegtran = require('imagemin-jpegtran'),
    gifsicle = require('imagemin-gifsicle'),
    optipng = require('imagemin-optipng'),
    replace = require('gulp-replace'),
    fs = require('fs'),
    concat = require('gulp-concat-util'),
    uncss = require('gulp-uncss'),
    minifyCSS = require('gulp-minify-css'),
    critical = require('critical');
    download = require('gulp-download');

// Jekyll
gulp.task('jekyll', function() {
  return gulp.src('index.html', { read: false })
    .pipe(shell(['jekyll build']));
});

// HTML
gulp.task('optimize-html', function() {
    return gulp.src('_site/**/*.html')
        .pipe(minifyHTML({
            quotes: true
        }))
        .pipe(replace(/<link href=\"\/css\/style.scss\"[^>]*>/, function(s) {
            var style = fs.readFileSync('_site/css/style.scss', 'utf8');
            return '<style>\n' + style + '\n</style>';
        }))
        .pipe(gulp.dest('_site/'));
});

// Javascript
gulp.task('javascript', ['jekyll'], function() {
    return gulp.src('js/main.js', { read: false })
        .pipe(shell(['jspm install']))
        .pipe(shell(['jspm bundle-sfx js/main _site/js/min.js --minify --no-mangle']));
});

// CSS
gulp.task('optimize-css', function() {
   return gulp.src('_site/css/style.scss')
       .pipe(autoprefixer())
       .pipe(uncss({
           html: ['_site/**/*.html'],
           ignore: []
       }))
       .pipe(minifyCss({keepBreaks: false}))
       .pipe(gulp.dest('_site/css/'));
});

// Eliminate render-blocking CSS
gulp.task('include-css', function() {
  return gulp.src('_site/**/*.html')
    .pipe(replace(/<link href=\"\/css\/style.scss\"[^>]*>/, function(s) {
      var style = fs.readFileSync('_site/css/style.scss', 'utf8');
      return '<style>\n' + style + '\n</style>';
    }))
    .pipe(gulp.dest('_site/'));
});

// Eliminate render-blocking CSS in above-the-fold content
gulp.task('styles:critical', function() {
    return gulp.src('src/styles/critical.css')
    .pipe(minifyCSS())
    .pipe(concat.header('<style>'))
    .pipe(concat.footer('</style>'))
    .pipe(rename({
        basename: 'criticalCSS',
        extname: '.html'
      }))
    .pipe(gulp.dest('_includes/'));
});

// Optimize Images
gulp.task('optimize-images', function () {
    return gulp.src(['_site/**/*.jpg', '_site/**/*.jpeg', '_site/**/*.gif', '_site/**/*.png'])
    .pipe(imagemin({
        progressive: false,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant(), jpegtran(), gifsicle()]
    }))
    .pipe(gulp.dest('_site/'));
});

// Purge cache
gulp.task('purge-cache', function() {
    var options = {
        token: config.cloudflareToken,
        email: config.cloudflareEmail,
        domain: config.cloudflareDomain
    };
    cloudflare(options);
});

// Remove unused CSS
gulp.task('uncss', function() {
  return gulp.src([
      'css/style.scss'
      // 'node_modules/bootstrap/dist/css/bootstrap-theme.css'
    ])
    .pipe(uncss({
      html: [
        // your site pages here
        'http://127.0.0.1:4000/',
      ]
    }))
    .pipe(gulp.dest('css/uncss/'));
});

// Google Analytics
gulp.task('fetch-analytics', function() {
  return download('https://www.google-analytics.com/analytics.js')
    .pipe(gulp.dest('assets/'));
});

// Run (Default)
gulp.task('default', ['javascript', 'optimize-css', 'include-css',  'optimize-html', 'optimize-images', 'styles:critical', 'fetch-analytics']);

// Run: Build
gulp.task('build', ['javascript', 'optimize-css', 'include-css',  'optimize-html', 'optimize-images', 'styles:critical', 'fetch-analytics']);

// Run: Clean
gulp.task('clean', ['uncss']);
```

<hr>

<h2 style="margin-top:1.75em"><a href='#update' id='update' class='anchor' aria-hidden='true'>Updates</a></h2>

### Leveraging browser caching
  Since sharing my original post, I have since found a way to resolve the persistent "Leverage browser caching" issue, which was ironically referencing Google's own analytics tools. 
  
```javascript
// Google Analytics
gulp.task('fetch-analytics', function() {
  return download('https://www.google-analytics.com/analytics.js')
    .pipe(gulp.dest('assets/')); // or whatever folder you want it in
});
```
  
  This way, a new version of the `analytics.js` file is downloaded on each deployment, rather than utilizing Google's remote file. Therefore, you should also instead include your local `analytics.js` file in your html. 


<!--------------------------------- Links ------------------------------------->

[Google PageSpeed Insights]: https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2FJonSn0w.github.io%2F&tab=mobile
[GIMP]: https://www.gimp.org/
[Scoring 100 on Google’s PageSpeed Insights with Jekyll]: https://medium.com/@dimitrikoenig/scoring-100-on-googles-pagespeed-insights-with-jekyll-adcbbb229baf
[How to get your Jekyll + GitHub pages website to pass Google's PageSpeed Tests]: https://chrishallahan.com/blog/pass-google-pagespeed-performance-test
[Optimized Jekyll site with Grunt]: http://o.zasadnyy.com/blog/optimized-jekyll-site-with-grunt/  
[gist]: https://gist.github.com/JonSn0w/741b353d9a2a19947d2b10a9c94de21f
