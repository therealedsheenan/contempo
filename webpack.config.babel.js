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
  entry: './client/index.jsx'
};

module.exports = (env) => {
  const { ifProd, ifNotProd } = getIfUtils(env);
  const config = {
    context: resolve('src'),
    resolve: {
      modules: [
        resolve('./src/client'),
        'node_modules'
      ],
      extensions: ['.js', '.jsx', '.json']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: false
    },
    entry: PATHS.entry,
    output: {
      path: PATHS.output,
      filename: ifProd('[name].js', '[name].js'),
      pathinfo: ifNotProd(),
      publicPath: '/public/'
    },
    devtool: ifProd('source-map', 'eval'),
    devServer: {
      contentBase: PATHS.output,
      inline: true,
      port: 8000,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
          include: [
            resolve('src')
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
              name: ifProd('[path][name].[ext]?[hash]', '[hash].[ext]'),
              limit: 10000
            }
          }
        },
        {
          test: /\.(eot|ttf|wav|mp3)$/,
          use: {
            loader: 'file-loader',
            query: {
              name: ifProd('[path][name].[ext]?[hash]', '[hash].[ext]')
            }
          }
        }
      ]
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin(ifProd('styles.[name].css', 'styles.[name].[chunkhash].css')),
      ifProd(new InlineManifestWebpackPlugin()),
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: 'commons',
        filename: 'commons.js'
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
      })
    ])
  };
  if (env.debug) {
    console.log(config);
    debugger // eslint-disable-line
  }
  return config;
};
