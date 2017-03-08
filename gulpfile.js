var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var webpackConfig = Object.create(require('./webpack.config.js'));

var appPath = './';

gulp.task('clean', function(callback) {
  del([
    'build',
  ]);
  callback();
});

gulp.task('webpack', function(callback) {
  // run webpack
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      // output options
      colors: true
    }));
    callback();
  });
});

gulp.task('build', ['webpack'], function(callback) {
  const htaccessTemplate = fs.readFileSync(path.join(__dirname, 'templates', '.htaccess')).toString();
  const htaccess = _.template(htaccessTemplate)({REWRITE_BASE: webpackConfig.output.publicPath});
  fs.writeFile(path.join(__dirname, 'build', '.htaccess'), htaccess);

  gutil.log('[build]', 'successfully');
  callback();
});

var WebpackDevServer = require('webpack-dev-server');
gulp.task('dev', function(callback) {
  // modify some webpack config options
  webpackConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(webpackConfig), {
   publicPath: webpackConfig.output.publicPath,
   stats: {colors: true}
  })
  .listen(webpackConfig.devServer.port, webpackConfig.devServer.host, function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log(
      '[webpack-dev-server]',
      'http://' + webpackConfig.devServer.host + ':' + webpackConfig.devServer.port + '/webpack-dev-server' + webpackConfig.output.publicPath + 'index.html'
    );
  });
});
