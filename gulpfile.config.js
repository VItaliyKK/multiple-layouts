//
// ** paths to files **
//

module.exports = {
    images: {
        src: 'src/**/assets/*.*',
        dest: 'docs'
    },
    styles: {
        main:{
            src: 'src/main.sass',
            dest: 'docs'
        },
        layout1: {
            src: 'src/layout1/styles/*.sass',
            dest: 'docs/layout1'
        },
        layout2: {
            src: 'src/layout2/styles/*.sass',
            dest: 'docs/layout2'
        },
        layout3: {
            src: 'src/layout3/styles/*.sass',
            dest: 'docs/layout3'    
        },
        layout4: {
            src: 'src/layout4/styles/*.sass',
            dest: 'docs/layout4'    
        },
        reset:{
            src: 'src/shared/reset.sass',
            dest: 'docs/shared'
        }
    },
    fonts:{
        src: 'src/**/*.{ttf,otf}',
        dest: 'docs'  
    },
    scripts: {
        src: 'src/**/*.js',
        dest: 'docs'
    },
    html: {
        src: 'src/**/*.html',
        dest: 'docs'
    }
};