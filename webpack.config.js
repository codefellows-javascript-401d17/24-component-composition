'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    publicPath: '/',
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js'
  },
  module: {
    rules : [
      { test: /\.js$/, exclude:/\node_modules/, loader: 'babel-loader' },
      { test: /\.scss/, loader: ExtractTextWebpackPlugin.extract(['css-loader', 'sass-loader'])}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/src/index.html` }),
    new ExtractTextWebpackPlugin('bundle-[hash].css')
  ],
  devServer: {
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
}