module.exports = function(){
      $.gulp.task('svg', () => {
         return $.gulp.src('./src/static/img/svg/*.svg') //Путь до файлів svg
            .pipe($.svgmin({ // Мініфікація svg файлів
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.cheerio({//Видалення ненужних строк в svg файлах
                run: function($){
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: { xmlMode: true }
            }))
            .pipe($.replace('&gt;', '>')) //Заміняємо символ в строки на потрібний нам символ
            .pipe($.svgSprite({ //Збирає всі svg в один svg спрайт
                mode: {
                    symbol: {
                        sprite: "sprite.svg"
                    }
                }
            }))
            .pipe($.gulp.dest('./dest/img/svg/'));
      });

      $.gulp.task('svg:build', () => {
        return $.gulp.src('./src/static/img/svg/*.svg') //Путь до файлів svg
           .pipe($.svgmin({ // Мініфікація svg файлів
               js2svg: {
                   pretty: true
               }
           }))
           .pipe($.cheerio({//Видалення ненужних строк в svg файлах
               run: function($){
                   $('[fill]').removeAttr('fill');
                   $('[stroke]').removeAttr('stroke');
                   $('[style]').removeAttr('style');
               },
               parserOptions: { xmlMode: true }
           }))
           .pipe($.replace('&gt;', '>')) //Заміняємо символ в строки на потрібний нам символ
           .pipe($.svgSprite({ //Збирає всі svg в один svg спрайт
               mode: {
                   symbol: {
                       sprite: "sprite.svg"
                   }
               }
           }))
           .pipe($.gulp.dest('./build/img/svg/'));
     });

};