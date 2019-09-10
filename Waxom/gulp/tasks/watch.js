module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/html/**/*.html', $.gulp.series('html'));
        $.gulp.watch('./dev/static/styles/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/static/images/**/*.{png,jpg,gif}', $.gulp.series('img:dev'));
        $.gulp.watch('./dev/static/images/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('js:dev'));
    });
};