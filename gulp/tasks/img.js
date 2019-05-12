module.exports = function(){
 //Визов при запуску проекту
                $.gulp.task('img:dev', function () {
                    return $.gulp.src('src/static/img/**/*.{png,jpg,jpeg}')
                        .pipe($.gulp.dest('dest/img'));
                });
//Визов при зборці проекту
                $.gulp.task('img:build', function () {
                    return $.gulp.src('src/static/img/**/*.{png,jpg,jpeg}')
                    .pipe($.imagemin({
                        plugins: [
                            $.jpegtran({ progressive: true }),
                            $.pngquant({quality: '65-80'})
                        ]
                    }))    
                    .pipe($.gulp.dest('build/img'));
                });

}