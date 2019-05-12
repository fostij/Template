module.exports = function(){

  // Libs
  $.gulp.task('script:lib', function(){
    return $.gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/slick-carousel/slick/slick.min.js'
    ])
     
        .pipe($.concat('libs.min.js'))
        //.pipe($.uglify())
        .pipe($.gulp.dest('dest/js/'))
        .pipe($.browserSync.reload({
          stream: true
      }));
  });

  // JS
   $.gulp.task('js', function(){
    return $.gulp.src('src/static/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.concat('script.js'))
    //.pipe($.uglify())
    .on("error", $.notify.onError({
       title: "js"
     }))
    .pipe($.sourcemaps.write())
    .pipe($.gulp.dest('dest/js/'))
    .pipe($.browserSync.reload({ // Обновлення сервера тільки після змін в файлі
      stream: true
  }));

 });


  // Libs
  $.gulp.task('script:lib:build', function(){
    return $.gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/slick-carousel/slick/slick.min.js'
    ])
        .pipe($.sourcemaps.init())
        .pipe($.concat('libs.min.js'))
        //.pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe($.gulp.dest('build/js/'))
        .pipe($.browserSync.reload({
          stream: true
      }));
  });

  // JS
   $.gulp.task('js:build', function(){
    return $.gulp.src('src/static/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.concat('script.js'))
    //.pipe($.uglify())
    .on("error", $.notify.onError({
       title: "js"
     }))
    .pipe($.sourcemaps.write())
    .pipe($.gulp.dest('build/js/'))
    .pipe($.browserSync.reload({ // Обновлення сервера тільки після змін в файлі
      stream: true
  }));

 });

};