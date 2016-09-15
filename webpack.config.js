const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./libs/parts');

const pkg = require('./package.json');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const common = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app,
    vendor: pkg.dependencies ? Object.keys(pkg.dependencies) : []
  },
  output: {
    path: PATHS.build,
    filename: '[name].[hash]js',
    // This is used for require.ensure. The setup
    // will work without but the is useful to set.
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Resume",
      baseHref: "/",
      filename: "index.html",
      template: "templates/index.html",
      minify: false,
      hash: true,
      cache: true
    })
  ]
};

var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.extractBundle({
        name: 'vendor',
        entries: []
      }),
      parts.minify(),
      parts.setupCSS(PATHS.app),
      parts.setupBabel()
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setupCSS(PATHS.app),
      parts.setupBabel(),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.IP,
        port: process.env.PORT
      })
    );
}

module.exports = validate(config);

