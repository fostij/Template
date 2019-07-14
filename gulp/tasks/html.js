module.exports = function(){
    //Template
    $.gulp.task('html', function(){
        return $.gulp.src('src/html/pages/*.html', 'src/html/pages/*.htaccess')
        //.pipe($.pug({
            //pretty: true // Свойство для читабельності HTML коду
        //}))
        .pipe($.gulp.dest('dest'))
        .on('end', $.browserSync.reload);// Обновлення сервера тільки після змін в файлі
        
    });

    $.gulp.task('html:build', function(){
        return $.gulp.src('src/html/pages/*.html', 'src/html/pages/*.htaccess')
        //.pipe($.pug({
          //  pretty: true // Свойство для читабельності HTML коду
        //}))
        .pipe($.gulp.dest('build'))
        .on('end', $.browserSync.reload);// Обновлення сервера тільки після змін в файлі
        
    });
}