const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const PATHS = {
  app: resolve('src'),
  output: resolve(__dirname, './public'),
  entry: './index.jsx'
};


module.exports = {
  context: resolve(__dirname, 'src/client'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    PATHS.entry
  ],
  output: {
    path: PATHS.output,
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    hot: true,
    contentBase: PATHS.output,
    historyApiFallback: true,
    publicPath: '/',
    port: 8000
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
    new ProgressBarPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('styles.[name].css'),
    new InlineManifestWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    })
  ]
};
