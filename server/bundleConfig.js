const { resolve } = require('path');
const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');

// View the bundle-analyzer plugin by uncommenting the next line.
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CONFIG = {
  app: resolve('src'),
  output: resolve(__dirname, './public'),
  entry: './server/index.jsx',
  port: 8000
};

module.exports = function (type) {
  const bundleConfig = {
    context: resolve(__dirname, '..'),
    entry: [],
    plugins: []
  };

  if (type === 'DEV') {
    bundleConfig.entry = [CONFIG.entry];
    bundleConfig.devtool = 'inline-source-map';
    bundleConfig.watch = true;
  } else {
    bundleConfig.entry = [CONFIG.entry];
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
