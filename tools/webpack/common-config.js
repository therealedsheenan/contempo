const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const CONFIG = require('./constants');

module.exports = {
  output: {
    path: CONFIG.output,
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      'preact-compat': 'preact-compat/dist/preact-compat'
    }
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: [
          resolve(''),
          resolve('node_modules/preact-compat/src')
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          query: {
            name: '[hash].[ext]',
            limit: 10000
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|wav|mp3)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('styles.[name].css'),
    new InlineManifestWebpackPlugin()
  ]
};
