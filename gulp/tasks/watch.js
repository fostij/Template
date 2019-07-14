module.exports = function(){
    // Слежка за змінами в файлах
    $.gulp.task('watch', function(){
        $.gulp.watch('src/html/**/*.html', $.gulp.series('html')),
        $.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('sass')),
        $.gulp.watch('src/static/js/**/*.js', $.gulp.series('js')),
        $.gulp.watch('src/static/js/**/*.js', $.gulp.series('script:lib')),
        $.gulp.watch('src/static/img/*', $.gulp.series('img:dev')),
        $.gulp.watch('src/static/fonts/*', $.gulp.series('font'))   
      }); 
};