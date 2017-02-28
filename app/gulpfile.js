var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var less = require("gulp-less");
var connect = require('gulp-connect');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task("less",function(){
  gulp.src( "www/public/css/lotourStyle.less" )
  .pipe( less() )
  .pipe( gulp.dest( "www/public/css/" ) )
  .pipe( minifyCss() )
  .pipe( rename("lotourStyle.min.css") )
  .pipe( gulp.dest( "www/public/css/" ) )
})
gulp.task('webserver', function() {
   connect.server({
    port: 8888,
    livereload : true,
    root : "www/"
  })
});

gulp.task("reload",function(){
  gulp.src( [
    "www/index.html",
    "www/controllers/**/*.html",
    "www/components/**/*.html",
    "www/public/css/*.less",
    "www/public/less/*.less",
    "www/public/less/**/*.less",
    "www/index.js",
    "www/**/*.js",
    "www/**/**/*.js"
  ] )
  .pipe(connect.reload());
})
gulp.task("watchTask",function(){
  gulp.watch( ["www/index.html","www/controllers/**/*.html","www/components/**/*.html"],["reload"])
  gulp.watch( ["www/public/css/*.less","www/public/less/*.less","www/public/less/**/*.less"],["less",'reload'] )
  gulp.watch( ["www/index.js","www/**/*.js","www/**/**/*.js"],["reload"] )
  
})

gulp.task('default', ['sass',"less","webserver","watchTask"]);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['sass',"less"], function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
