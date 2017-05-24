const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

// View the bundle-analyzer plugin by uncommenting the next line.
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const PATHS = {
  app: resolve('src'),
  output: resolve(__dirname, './public'),
  entry: './client/index.jsx'
};


module.exports = {
  context: resolve(__dirname, ''),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    PATHS.entry
  ],
  output: {
    path: PATHS.output,
    filename: '[name].[hash].js',
    publicPath: '/',
    chunkFilename: '[id].[chunkhash].js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  devServer: {
    hot: true,
    contentBase: PATHS.output,
    historyApiFallback: true,
    publicPath: '/',
    port: 8000,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: [
          resolve('')
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
    // View the bundle-analyzer plugin by uncommenting the next line.
    // new BundleAnalyzerPlugin(),
    new ProgressBarPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: '[name].js',
    //   minChunks: Infinity
    // }),
    // async chunks
    // catch all - used in more then one place
    // new webpack.optimize.CommonsChunkPlugin({
    //   async: 'used-twice',
    //   minChunks(module, count) {
    //     return count >= 2;
    //   }
    // }),
    // specifically bundle these large things
    // new webpack.optimize.CommonsChunkPlugin({
    //   async: 'react-dnd',
    //   minChunks(module, count) {
    //     var context = module.context;
    //     var targets = [
    //      'react-dnd',
    //      'react-dnd-html5-backend',
    //      'react-dnd-touch-backend',
    //      'dnd-core'
    //     ]
    //     return context &&
    //     context.indexOf('node_modules') >= 0 &&
    //     targets.find(t => new RegExp('\\\\' + t + '\\\\', 'i').test(context));
    //   },
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('styles.[name].css'),
    new InlineManifestWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body'
    })
  ]
};
