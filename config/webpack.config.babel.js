import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { removeEmpty } from 'webpack-config-utils';
import OfflinePlugin from 'offline-plugin';
import getClientEnvironment from './env'
// import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin';

let publicUrl = ''
let env = getClientEnvironment(publicUrl)

const PATHS = {
    app: resolve('src'),
    output: resolve('public'),
    styles: resolve('/src/client/styles/main.js'),
};

module.exports = {
  // const {ifProd, ifNotProd} = getIfUtils(env);
    resolve: {
      modules: [
        resolve('./src/client'),
        'node_modules'
      ]
    },
    context: PATHS.app,
    entry: [
      require.resolve('react-dev-utils/webpackHotDevClient'),
      './client/browser.js'
    ],
    output: {
        path: PATHS.output,
        filename: 'bundle.[name].[hash].js',
        pathinfo: true
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // {
        //     test: /\.scss$/,
        //     exclude: /node_modules/,
        //     loaders: ["style", "css?sourceMap", "sass?sourceMap"]
        // },
        {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: ['css', 'sass'],
          })
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
          loader: 'url-loader',
          query: {
            name: '[path][name].[ext]?[hash]',
            limit: 10000,
          },
        },
        {
          test: /\.(eot|ttf|wav|mp3)$/,
          loader: 'file-loader',
          query: {
            name: '[path][name].[ext]?[hash]',
          },
        },
      ]
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin('styles.[name].[chunkhash].css'),
      // ifProd(new InlineManifestWebpackPlugin()),
      // ifProd(new webpack.optimize.CommonsChunkPlugin({
      //     names: 'manifest',
      // })),
      new HtmlWebpackPlugin({
          template: './index.html',
          inject: 'body'
      }),
      new OfflinePlugin(),
      new webpack.DefinePlugin(env),
      new webpack.HotModuleReplacementPlugin()
    ])
};
