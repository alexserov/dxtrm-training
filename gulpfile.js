import gulp from 'gulp'
import babel from 'gulp-babel'
import less from 'gulp-less'
import { join, dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

gulp.task('build-styles', ()=>{
    gulp.src('src/styles.less')
        .pipe(less())
        .pipe(gulp.dest('dist'))
})
gulp.task('build-product-sources', ()=>{
    gulp.src('src/entrypoint.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
})

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  export default defaultTask;
  