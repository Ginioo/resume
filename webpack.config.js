const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const pkg = require('./package.json');
const parts = require('./libs/parts');

const PATHS = {
  app: path.join(__dirname, 'src', 'index'),
  appStyle: path.join(__dirname, 'src', 'style'),
  appImage: path.join(__dirname, 'src', 'images'),
  build: path.join(__dirname, 'build'),
  baseHref: '' // baseHref: '/starter/'
};

const common = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: PATHS.baseHref
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'FENG-CHIN WU (WEB DEVELOPER)',
      baseHref: PATHS.baseHref,
      filename: 'index.html',
      template: 'templates/index.html',
      minify: false,
      hash: true,
      cache: true
    })
  ]
};

var config;

// Detect how npm is run and branch based on that
switch (process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          // This is used for require.ensure. The setup
          // will work without but this is useful to set.
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.loadImages(PATHS.appImage),
      // parts.setEnvironmentVariable('process.env.NODE_ENV', 'production'),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react', 'react-dom']
      }),
      parts.minify(),
      parts.setupJSON(),
      parts.extractCSS(),
      parts.setupCSS(PATHS.appStyle),
      parts.setupBabel()
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.loadImages(PATHS.appImage),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react', 'react-dom']
      }),
      parts.setupJSON(),
      parts.extractCSS(),
      parts.setupCSS(PATHS.appStyle),
      parts.setupFonts(),
      parts.setupBabel(),
      parts.devServer({
        // Customize host/port here if needed
        host: 'localhost',
        port: 8080
      })
    );
}

module.exports = validate(config);
