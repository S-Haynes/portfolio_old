const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const webserver = require('gulp-webserver');


// copy HTML

gulp.task('copyHtml', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('views'))
})

//auto-prefix then compile sass

gulp.task('sass', function(){
	gulp.src('src/sass/*.scss')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false,
		}))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('views/css'))
})



// minify js

gulp.task('minify', function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('views/js'))
});

// webserver

gulp.task('webserver', function(){
	gulp.src('views')
		 .pipe(webserver({
     	 		livereload: true,
      			open: true,
      			port: 4000
    		}));
})


// watch all files

gulp.task('watch', function(){
	gulp.watch('src/*.html', ['copyHtml'])
	gulp.watch('src/sass/*.scss', ['sass'])
	gulp.watch('src/js/*.js', ['minify'])
});

// set default behavior

gulp.task('default', ['watch', 'webserver'])