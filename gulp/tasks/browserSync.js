module.exports = function(){
       // Static server
       $.gulp.task('serve', function() {
        $.browserSync.init({
            notify: false,                 
            port: 9000, 
            server: {
                baseDir: "./dest"
            }
        });
    });
}