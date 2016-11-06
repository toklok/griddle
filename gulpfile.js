const postcss = require('gulp-postcss'),
    gulp = require('gulp');

const options = {
    cssSource: './myfile.css',
    cssDestination: './dest/css'
};

gulp.task('css', function () {
     return gulp.src(options.cssSource)
        .pipe(postcss([require('postcss-ant')]))
             .pipe(gulp.dest(options.cssDestination))
});