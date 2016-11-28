import path from 'path'
import fs from 'fs'

let appDirectory = fs.realpathSync(process.cwd());

let resolveApp = relativePath => {
  return path.resolve(appDirectory, relativePath);
}

module.exports = {
  appPublic: resolveApp('public'),
  appPackageJson: resolveApp('package.json'),
}
