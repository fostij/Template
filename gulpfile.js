'use strict';
global.$ = {
    gulp:         require('gulp'), // Таск Менеджер
    sass:         require('gulp-sass'), // Компілятор sass/scss коду
    minifycss:    require('gulp-csso'), //Оптимізує і мініфікує сss код
    concat:       require('gulp-concat'), // Зєднує всі файли в один
    autoprefixer: require('gulp-autoprefixer'), // Проставляє префікси в сss
    sourcemaps:   require('gulp-sourcemaps'), // Створює карту по файлу
    uglify:       require('gulp-uglyfly'), // Мініфікатор файлів
    notify:       require('gulp-notify'), // Увідомляє про ошибки в файлах
    watch:        require('gulp-watch'), // Слежка за змінами в файлах
    browserSync:  require('browser-sync').create(), // Автооновлення всіх змін в файлах і відображення в браузері   
    cli:          require('gulp-cli'), // Допомагає використовувати разні версии gulp.
    del:          require('del'), //Видалення папки dist після зборки
    cache:        require('gulp-cache'), //Очищення кешу
    ftp:          require('vinyl-ftp'), // Отправка проекту на сервер
    util:         require('gulp-util'), // Логирование, подсветка вывода в консоли, и так далее
    rename:       require('gulp-rename'), //  Переименования файлов.
    // Мініфікатори для зображень
    imagemin:     require('gulp-imagemin'), //Мініфікація картинок
    jpegtran:     require('imagemin-jpegtran-gfw'), // Jpeg,jpg
    pngquant:     require('imagemin-pngquant-gfw'), // png
    // Мініфікатори для зображень svg
    cheerio:      require('gulp-cheerio'), // Маніпуляція з HTML and XML файлами
    replace:      require('gulp-replace'), // Заміна назви строк файлів і вивід їх в поток
    svgSprite:    require('gulp-svg-sprite'), // Створення спрайту з svg
    svgmin:       require('gulp-svgmin'), // Оптимізація svg
    bower:        require('bower'), // Установка плагінів, бібліотек та ін.
    path: {
        tasks:    require('./gulp/config/tasks.js')
    }
};



$.path.tasks.forEach(function(taskPath){
   require(taskPath)();
});

$.gulp.task('clear', function(){
    return $.del.sync('dest');
});

$.gulp.task('cacheclear', function(){
    return $.cache.clearAll();
});




//Порядок виконання тасків при запуску проекта
    $.gulp.task('default', $.gulp.series(
      $.gulp.parallel('html', 'sass', 'script:lib', 'js', 'img:dev', 'font', 'svg', 'cacheclear'),  // Порядок запуску файлів
      $.gulp.parallel('watch', 'serve') // Порядок запуску сервера
    
));

// Отправка готового продакшену на сервер
$.gulp.task( 'deploy', function () {
 
    var conn = $.ftp.create( {
        host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
        parallel: 10,
        log:      $.util.log
    } );
 
    var globs = [
        'build/**',
        'build/css/my_style.css',
        'build/fonts/**/*',
        'build/img/**',
        'build/js/libs.min.js',
        'build/js/script.js',
        'build/index.html',
        'build/.htaccess'
        
    ];
 
    return $.gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html' ) );
 
} );

//Порядок виконання тасків при зборці проекта
$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('clear', 'html:build', 'sass:build', 'script:lib:build', 'js:build', 'img:build', 'font:build', 'svg:build'),  // Порядок запуску файлів
    $.gulp.parallel('watch', 'serve') // Порядок запуску сервера

));
