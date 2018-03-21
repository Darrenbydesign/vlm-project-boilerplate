//  Plug-in Variable Declaration
var gulp = require('gulp'),
    sass = require('gulp-sass');
// Path Variable Declaration
var paths = {

  sassInput: 'app/sass/**/*.scss',
  sassOutput: 'app/styles',
};


// Task Declaration
gulp.task('sass', function(){
  return gulp.src(paths.sassInput)
  .pipe(sass())
  .pipe(gulp.dest(paths.sassOutput))
});