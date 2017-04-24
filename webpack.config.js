'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function makeWebpackConfig() {
  var config = {};
  config.entry = {
    app: './src/app/index.module.js'
  };
  config.output = {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  };
  config.devtool = 'eval-source-map';
  config.module = {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
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
    }]
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
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true }),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/assets/img',
      to: __dirname + '/dist/img'
    }]),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/app/i18n',
      to: __dirname + '/dist/app/i18n'
    }]),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body'
      }),
    new ExtractTextPlugin({filename: 'css/[name].css', allChunks: false})
  ];
  config.devServer = {
    contentBase: './src',
    stats: 'minimal',
    historyApiFallback: true
  };

  return config;
}();
