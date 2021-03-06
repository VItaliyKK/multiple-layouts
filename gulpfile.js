const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cssnano = require('gulp-cssnano');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const del = require('del');
const paths = require('./gulpfile.config')
const stylesPathsArr = Object.entries(paths.styles)


//runing localhost with the specified port
function browser(done) {
    browserSync.init({
        server: {
            baseDir: './docs'
        },
        port: 3002
    });
    done();
};

 // when changing the files reload page
function browserReload(done) {
    browserSync.reload();
    done();
};

//all images are minimized
function images(){
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.stream())
};

// building fonts
function fonts(){
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
        .pipe(browserSync.stream())
};

// processing sass
function styles(done){
    stylesPathsArr.forEach( el => {
        gulp.src(el[1].src)
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({ 
                cascade: false
            }))
            .pipe(concat(`${el[0]}.min.css`))
            .pipe(cssnano())
            .pipe(gulp.dest(el[1].dest))
            .pipe(browserSync.stream())
    })
    done()
};

// processing js files
function scripts(){
    return gulp.src(paths.scripts.src)
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream())
};

// bilding html
function html(){
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream())
};

// when changing the files run function
function watch(){
    gulp.watch(paths.images.src, images);
    gulp.watch('./src/**/*.sass', styles);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.html.src, html);
    gulp.watch('./src/*.html', gulp.series(browserReload));
};

//remove '/build' folder
function clear(){
    return del(['docs']);
}

const build = gulp.series(clear, gulp.parallel(images, fonts, styles, scripts, html));
gulp.task('build', build);
gulp.task('default', gulp.parallel(watch, gulp.series(build, browser) ));