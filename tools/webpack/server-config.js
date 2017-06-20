// @flow

const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');

const CONFIG = require('./constants');

// View the bundle-analyzer plugin by uncommenting the next line.
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// $FlowFixMe
module.exports = function bundle(type) {
  const bundleConfig = {
    context: CONFIG.context,
    entry: [],
    plugins: []
  };

  if (type === 'DEV') {
    bundleConfig.entry = ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', CONFIG.serverEntry];
    // $FlowFixMe
    bundleConfig.devtool = 'cheap-module-eval-source-map';
    bundleConfig.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin());
    // bundleConfig.devServer = { hot: true, publicPath: '/public/', historyApiFallback: true }
  } else {
    bundleConfig.entry = [CONFIG.serverEntry];
    // $FlowFixMe
    bundleConfig.devtool = 'cheap-source-map';
    bundleConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
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
