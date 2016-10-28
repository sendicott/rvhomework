let gulp = require('gulp');
let sass = require('gulp-sass');
let browserify = require('gulp-browserify');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/'));
});

gulp.task('js', function() {
    return gulp.src('app.js')
        .pipe(browserify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    gulp.watch('index.html', ['html']);
    gulp.watch('style.scss', ['css']);
    gulp.watch('app.js', ['js']);
});