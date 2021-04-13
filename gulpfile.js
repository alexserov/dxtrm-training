import gulp from 'gulp'
import less from 'gulp-less'
import rename from 'gulp-rename'
import webpack from 'webpack-stream'
import uglify from 'gulp-uglify'
import header from 'gulp-header'
import getHeader from './header.js'


gulp.task('build-styles', ()=>
    gulp.src('src/styles.less')
        .pipe(rename(x=>{
            x.basename = 'playgroundStyles';
        }))
        .pipe(less())
        .pipe(gulp.dest('dist'))
);
gulp.task('build-base-sources', ()=>
    gulp.src('src/entrypoint.js')        
        .pipe(webpack({
            mode: 'none',
            module: {
                rules: [
                  {
                      test: /\.m?js$/,
                      exclude: /node_modules/,
                      use: {
                          loader: "babel-loader",
                          options: {
                              presets: ["@babel/preset-env"],                
                              plugins: ["@babel/plugin-proposal-class-properties"]
                          }
                      }
                  }      
                ]
              }
        }))
        .pipe(rename(x=>{
            x.basename = 'playground';
            x.extname = '.jstemp';
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('update-dev-sources', ()=>
        gulp.src('dist/*.jstemp')
        .pipe(rename(x=>{            
            x.extname = '.dev.js';
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('update-prod-sources', ()=>
        gulp.src('dist/*.jstemp')
        .pipe(rename(x=>{            
            x.extname = '.js';
        }))
        .pipe(uglify())
        .pipe(header(getHeader()))
        .pipe(gulp.dest('dist'))
);

gulp.task('build-dev-sources', gulp.series('build-base-sources', 'update-dev-sources'));
gulp.task('build-prod-sources', gulp.series('build-base-sources', 'update-prod-sources'));
gulp.task('all', gulp.parallel('build-styles', gulp.series('build-base-sources', gulp.parallel('update-dev-sources', 'update-prod-sources'))));

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  export default gulp.series('all');
  