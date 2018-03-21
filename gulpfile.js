//  Plug-in Variable Declaration
var gulp = require('gulp'),
    sass = require('gulp-sass');
// Path Variable Declaration
var paths = {

  sassInput: 'app/sass/**/*.scss',
  sassOutput: 'app/styles',
};


// Build Task Declaration
gulp.task('sass', function(){
  return gulp.src(paths.sassInput)
  .pipe(sass())
  .pipe(gulp.dest(paths.sassOutput))
});

// Watch Task Declaration
gulp.task('watch', function(){
  gulp.watch(paths.sassInput, ['sass'])
  .on('change', function(event) {
    console.log('\n File' + event.path + 'was' + event.type + ', running tasks...' \n);
  });  
})