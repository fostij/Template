module.exports = function(){
    $.gulp.task('font', function(){
       return $.gulp.src('./src/static/fonts/**/*', './src/static/webfonts/**/*')       
        .pipe($.gulp.dest('./dest/fonts/'));

    });

    $.gulp.task('font:build', function(){
        return $.gulp.src('./src/static/fonts/**/*', './src/static/webfonts/**/*')       
         .pipe($.gulp.dest('./build/fonts/'));
 
     });

};