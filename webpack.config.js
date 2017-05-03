const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function (env,args) {
  if (env === 'analyze-dev') {
    const webpack = require('./webpack.dev.js');
    webpack.plugins.push(
      new BundleAnalyzerPlugin()
    );
    return webpack;
  } else if (env === 'analyze-prod') {
    const webpack = require('./webpack.prod.js');
    webpack.plugins.push(
      new BundleAnalyzerPlugin()
    );
    return webpack;
  }
  return require(`./webpack.${env}.js`);
};
