const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.devServer = function (options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host || '0.0.0.0', // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
};

exports.loadImages = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(png|jpg)$/,
          loader: "file-loader?name=img-[sha512:hash:base64:7].[ext]",
          include: paths
        }
      ],
    },
  };
};

exports.setupFonts = function () {
  return {
    module: {
      loaders: [
        // the url-loader uses DataUrls.
        // the file-loader emits files.
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
          // loader: "url?limit=10000"
          loader: "url"
        },
        {
          test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
          loader: 'file'
        },
      ]
    }
  };
};

exports.setupCSS = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.(css|scss)$/,
          loaders: ['style', 'css', 'sass'],
          include: paths
        }
      ]
    }
  };
};

exports.extractCSS = function () {
  // Extract CSS during build
  return {
    module: {
      loaders: [
        // We first replace our loaders with a single loader,
        // provided by the ExtractTextPlugin. We apply two filters to it,
        // first sass then css. We removed the styles one,
        // as we don’t want to embed styles directly in the page anymore.
        {
          test: /\.(css|scss)$/,
          loader: ExtractTextPlugin.extract('css!sass'),
        }
      ]
    },
    plugins: [
      // Then, we effectively move the styles into public/styles.css,
      // embedding all the individual compiled chunks into a single file.
      new ExtractTextPlugin('[name].[chunkhash].css', {
        allChunks: true
      })
    ]
  };
};

exports.setupBabel = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  };
};

exports.setupJSON = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.json$/,
          loaders: ['json']
        }
      ]
    }
  };
};

exports.setEnvironmentVariable = function (key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugin: [
      new DefinePlugin(env)
    ]
  };
};

exports.minify = function () {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        // Don't beautify output (enable for neater output)
        beautify: false,

        // Eliminate comments
        comments: false,

        // Compression specific options
        compress: {
          warnings: false,

          // Drop `console` statements
          drop_console: true
        },

        // Mangling specific options
        mangle: {
          // Don't mangle $
          except: ['$'],

          // Don't care about IE8
          screw_ie8: true,

          // Don't mangle function names
          keep_fnames: true
        }
      })
    ]
  };
};

exports.extractBundle = function (options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
};

exports.clean = function (path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
    ]
  };
};