import { resolve } from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';
import OfflinePlugin from 'offline-plugin';
import InlineManifestWebpackPlugin from 'inline-manifest-webpack-plugin';

const PATHS = {
    app: resolve('src'),
    output: resolve('public'),
    styles: resolve('/src/client/styles/main.js'),
};

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);
  const config = {
    resolve: {
      modules: [
        resolve('./src/client'),
        'node_modules'
      ]
    },
    context: PATHS.app,
    entry: './client/browser.js',
    output: {
        path: PATHS.output,
        filename: ifProd('bundle.[name].[hash].js', 'bundle.[name].js'),
        pathinfo: ifNotProd()
    },
    devtool: ifProd('source-map', 'eval'),
    devServer: {
        contentBase: PATHS.output,
        hot: true,
        inline: true,
    },
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
            name: ifProd('[path][name].[ext]?[hash]', '[hash].[ext]'),
            limit: 10000,
          },
        },
        {
          test: /\.(eot|ttf|wav|mp3)$/,
          loader: 'file-loader',
          query: {
            name: ifProd('[path][name].[ext]?[hash]', '[hash].[ext]'),
          },
        },
      ]
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
      ifProd(new InlineManifestWebpackPlugin()),
      ifProd(new webpack.optimize.CommonsChunkPlugin({
          names: 'manifest',
      })),
      new HtmlWebpackPlugin({
          template: './index.html',
          inject: 'body'
      }),
      new OfflinePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: ifProd('"production"', '"development"')
        }
      }),
    ])
  };
  if ( env.debug ) {
    console.log(config);
    debugger // eslint-disable-line
  }
  return config;
};
