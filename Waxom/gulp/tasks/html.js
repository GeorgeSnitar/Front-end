const rigger = require("gulp-rigger");
const htmlmin = require('gulp-htmlmin');

module.exports = function () {
    $.gulp.task('html', () => {
        return $.gulp
            .src("dev/html/pages/**/*.html")
            .pipe(rigger())
            .pipe(htmlmin({
                removeComments: true
            }))
            .pipe($.gulp.dest("build"))
            .on('end', $.browserSync.reload);
    });
};