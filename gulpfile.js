
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha');


var jsFIles = ['*.js', '**/*.js', '!node_modules/**'];

gulp.task('serve', ['style'], function() {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000,
            'AWS': {
                'endpoint':'http://localhost:8000',
                'region':'us-west-2'
            }
        },
        watch: jsFIles
    };

        return nodemon(options).on('restart',function(ev){
            console.log('Restarting...');
        });
}
);

gulp.task('style', function() {
    return gulp.src(jsFIles).pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish',{
            verbose:true
        }))
        .pipe(jscs());
});


gulp.task('test', function() {
    gulp.src('tests/*.js').pipe(gulpMocha({reporter:'nyan'}))
});

