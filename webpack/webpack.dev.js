const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const PATHS = {
  app: resolve('src'),
  output: resolve('public'),
  entry: './client/index.jsx'
};

module.exports = (env) => {
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
      filename: '[name].js',
      pathinfo: true,
      publicPath: '/public/'
    },
    devtool: 'source-map',
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
              name: '[hash].[ext]',
              limit: 10000
            }
          }
        },
        {
          test: /\.(eot|ttf|wav|mp3)$/,
          use: {
            loader: 'file-loader',
            query: {
              name: '[hash].[ext]'
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin('styles.[name].css'),
      new InlineManifestWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'client/index.html',
        inject: 'body'
      }),
      new OfflinePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: 'development'
        }
      })
    ]
  };
  if (env.debug) {
    console.log(config);
    debugger // eslint-disable-line
  }
  return config;
};
