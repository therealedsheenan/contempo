const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

// View the bundle-analyzer plugin by uncommenting the next line.
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const CONFIG = {
  app: resolve('src'),
  output: resolve(__dirname, './public'),
  entry: './client/index.jsx',
  port: 8000
};

module.exports = function (type) {
  const bundleConfig = {
    context: resolve(__dirname, '..'),
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
        inject: 'body'
      })
    ]
  };

  if (type === 'DEV') {
    bundleConfig.entry = [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${CONFIG.port}`,
      'webpack/hot/only-dev-server',
      CONFIG.entry
    ];
    bundleConfig.devtool = 'inline-source-map';
    bundleConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    bundleConfig.devServer = {
      hot: true,
      contentBase: CONFIG.output,
      publicPath: '/'
    };
  } else {
    bundleConfig.entry = [CONFIG.entry];
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
  // return Merge(commonConfig, bundleConfig);
};
