process.env.NODE_ENV = 'development';

require('dotenv').config({silent: true});

import chalk from 'chalk';
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import historyApiFallback from 'connect-history-api-fallback'
import httpProxyMiddleware from 'http-proxy-middleware'
import detect from 'detect-port'
import clearConsole from 'react-dev-utils/clearConsole'
import checkRequiredFiles from 'react-dev-utils/checkRequiredFiles'
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages'
import openBrowser from 'react-dev-utils/openBrowser'
import prompt from 'react-dev-utils/prompt'

//custom configuration
import paths from '../config/paths'
import config from '../config/webpack.config.babel'

const DEFAULT_PORT = process.env.PORT || 3000
let compiler
let handleCompile

// if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
//   process.exit(1);
// }

let setupCompiler = (host, port, protocol) => {
  compiler = webpack(config, handleCompile)

  compiler.plugin('invalid', () => {
    clearConsole();
    console.log('Compiling...');
  })

  compiler.plugin('done', (stats) => {
    clearConsole();

    // We have switched off the default Webpack output in WebpackDevServer
    // options so we are going to "massage" the warnings and errors and present
    // them in a readable focused way.
    let messages = formatWebpackMessages(stats.toJson({}, true));
    if (!messages.errors.length && !messages.warnings.length) {
      console.log(chalk.green('Compiled successfully!'));
      console.log();
      console.log('The app is running at:');
      console.log();
      console.log('  ' + chalk.cyan(protocol + '://' + host + ':' + port + '/'));
      console.log();
      console.log('Note that the development build is not optimized.');
      console.log('To create a production build, use ' + chalk.cyan('npm run build') + '.');
      console.log();
    }

    // If errors exist, only show errors.
    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.'));
      console.log();
      messages.errors.forEach(message => {
        console.log('this is a test');
        console.log(message);
        console.log();
      });
      return;
    }

    // Show warnings if no errors were found.
    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'));
      console.log();
      messages.warnings.forEach(message => {
        console.log(message);
        console.log();
      });
      // Teach some ESLint tricks.
      console.log('You may use special comments to disable some warnings.');
      console.log('Use ' + chalk.yellow('// eslint-disable-next-line') + ' to ignore the next line.');
      console.log('Use ' + chalk.yellow('/* eslint-disable */') + ' to ignore all warnings in a file.');
    }
  })
}

let onProxyError = proxy => {
  return (err, req, res) => {
    let host = req.headers && req.headers.host;
    console.log(
      chalk.red('Proxy error:') + ' Could not proxy request ' + chalk.cyan(req.url) +
      ' from ' + chalk.cyan(host) + ' to ' + chalk.cyan(proxy) + '.'
    );
    console.log(
      'See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (' +
      chalk.cyan(err.code) + ').'
    );
    console.log();

    // And immediately send the proper error response to the client.
    // Otherwise, the request will eventually timeout with ERR_EMPTY_RESPONSE on the client side.
    if (res.writeHead && !res.headersSent) {
        res.writeHead(500);
    }
    res.end('Proxy error: Could not proxy request ' + req.url + ' from ' +
      host + ' to ' + proxy + ' (' + err.code + ').'
    );
  }
}

let addMiddleware = devServer => {
  let proxy = require(paths.appPackageJson).proxy;
  devServer.use(historyApiFallback({
    disableDotRule: true,
    htmlAcceptHeaders: proxy ?
      ['text/html'] :
      ['text/html', '*/*']
  }));
  if (proxy) {
    if (typeof proxy !== 'string') {
      console.log(chalk.red('When specified, "proxy" in package.json must be a string.'));
      console.log(chalk.red('Instead, the type of "proxy" was "' + typeof proxy + '".'));
      console.log(chalk.red('Either remove "proxy" from package.json, or make it a string.'));
      process.exit(1);
    }

    let mayProxy = /^(?!\/(index\.html$|.*\.hot-update\.json$|sockjs-node\/)).*$/;
    devServer.use(mayProxy,
      httpProxyMiddleware(pathname => mayProxy.test(pathname), {
        target: proxy,
        logLevel: 'silent',
        onError: onProxyError(proxy),
        secure: false,
        changeOrigin: true
      })
    );
  }

  devServer.use(devServer.middleware);
}

let runDevServer = (host, port, protocol) => {
  let devServer = new WebpackDevServer(compiler, {
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    hot: true,
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    },
    https: protocol === "https",
    host: host
  })

  addMiddleware(devServer)

  devServer.listen(port, (err, result) => {
    if (err) {
      return console.log(err);
    }

    clearConsole();
    console.log(chalk.cyan('Starting the development server...'));
    console.log();
    openBrowser(protocol + '://' + host + ':' + port + '/');
  })
}


let run = port => {
  let protocol = process.env.HTTPS === 'true' ? 'https': 'http'
  let host = process.env.HOST || 'localhost'

  setupCompiler(host, port, protocol)
  runDevServer(host, port, protocol)
}

//detect current port used
detect(DEFAULT_PORT).then(port => {

  if (port === DEFAULT_PORT) {
    run(port);
    return;
  }

})
