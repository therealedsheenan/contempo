
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const CONFIG = require('./constants');

// View the bundle-analyzer plugin by uncommenting the next line.
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function bundle(type) {
  const bundleConfig = {
    context: CONFIG.context,
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/markup/index.html',
        inject: 'body'
      })
    ]
  };

  if (type === 'DEV') {
    bundleConfig.entry = [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${CONFIG.port}`,
      'webpack/hot/only-dev-server',
      CONFIG.clientEntry
    ];
    bundleConfig.devtool = 'inline-source-map';
    bundleConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    bundleConfig.devServer = {
      hot: true,
      contentBase: CONFIG.output,
      port: CONFIG.port,
      historyApiFallback: true,
      stats: 'errors-only'
    };
  } else {
    bundleConfig.entry = [CONFIG.clientEntry];
    bundleConfig.devtool = 'cheap-source-map';
    bundleConfig.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true
      }),
      new OfflinePlugin({
        relativePaths: false,
        publicPath: '/',
        caches: {
          main: [':rest:']
        },
        safeToUseOptionalCaches: true,
        AppCache: false
      })
    );
  }
  return bundleConfig;
};
