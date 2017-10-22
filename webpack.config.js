'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = function makeWebpackConfig() {
  var config = {};
  config.entry = {
    app: './src/app/index.module.js'
  };
  config.output = {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js'
  };
  config.devtool = 'eval-source-map';
  config.module = {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          {loader: 'css-loader', query: {sourceMap: true}},
          {loader: 'postcss-loader'}
        ],
      })
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader'
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    },{
      test: /\.html$/,
      loader: 'html-minify-loader'
    },{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: 'sass-loader' // compiles Sass to CSS
      }]
    }
    ]
  };
  config.plugins = [
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i,
      options: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: true, 
      compress: {
        warnings: false, 
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi]
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoEmitOnErrorsPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.scss$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/assets',
      to: __dirname + '/dist/assets'
    }]),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/app/i18n',
      to: __dirname + '/dist/app/i18n'
    }]),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/robots.txt',
      to: __dirname + '/dist/robots.txt'
    }]),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/sitemap.xml',
      to: __dirname + '/dist/sitemap.xml'
    }]),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/favicon.ico',
      to: __dirname + '/dist/favicon.ico'
    }]),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/app/data',
      to: __dirname + '/dist/app/data'
    }]),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body'
      }),
    new ExtractTextPlugin({filename: '[name]-[hash].css', allChunks: false}),

    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888
    }),

    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor-[hash].js',
        chunkFilename: 'vendor-[hash].js',
        minChunks(module, count) {
            var context = module.context;
            if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
              return false;
            }
            return context && context.indexOf('node_modules') >= 0;
        }
    })
  ];
  config.devServer = {
    contentBase: './src',
    stats: 'minimal',
    historyApiFallback: true
  };

  return config;
}();
