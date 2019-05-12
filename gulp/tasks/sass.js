module.exports = function(){
    // Style
    $.gulp.task('sass', function(){
        return $.gulp.src('src/static/scss/*.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            'include css': true
        }))
        .pipe($.concat('style.css'))
        .pipe($.rename('my_style.css'))
        .pipe($.autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .on("error", $.notify.onError({
            title: "style"
          }))
        .pipe($.minifycss())
        .pipe($.sourcemaps.write())
        .pipe($.gulp.dest('dest/css/'))
        .pipe($.browserSync.reload({
            stream: true
        }));// Обновлення сервера і при зміні файла залишаємося на ісходному місці
    });

    $.gulp.task('sass:build', function(){
        return $.gulp.src('src/static/scss/*.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            'include css': true
        }))
        .pipe($.concat('style.css'))
        .pipe($.rename('my_style.css'))
        .pipe($.autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .on("error", $.notify.onError({
            title: "style"
          }))
        .pipe($.minifycss())
        .pipe($.sourcemaps.write())
        .pipe($.gulp.dest('build/css/'))
        .pipe($.browserSync.reload({
            stream: true
        }));// Обновлення сервера і при зміні файла залишаємося на ісходному місці
    });
}