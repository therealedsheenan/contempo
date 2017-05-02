![logo contempo](https://github.com/therealedsheenan/contempo/blob/master/contempo.png)

# Contempo [![Build Status](https://travis-ci.org/therealedsheenan/contempo-python-api.svg?branch=master)](https://travis-ci.org/therealedsheenan/contempo-python-api) [![Dependency Status](https://dependencyci.com/github/therealedsheenan/contempo/badge)](https://dependencyci.com/github/therealedsheenan/contempo)
Starter development environment for React.
This repository is a starter development environment for creating apps(specifically for React) using webpack.

## Installation
This has a client and server environment.
Here are the following commands to install the environment.

- Make sure you have [YARN](https://yarnpkg.com/) installed in your system.
- To install yarn run `yarn install`

#### Running various environments:

`npm start` - Runs the basic development environment.

`npm run server` - Runs the webpack build and server script(server-rendering).

Access: `http://localhost:8000`

`npm test` - Runs the jest testing.
`npm run eslint` - Runs the eslint.


#### Under the hood:
 - Before running the various builds, npm scripts runs the prebuild `rimraf` command
that cleans up the public directory. This public directory servers as the output of all the builds.

- After running the build, npm scripts also copies assets to public directory.
- This adapts most of the functionalities from the [React-scripts](https://github.com/facebookincubator/create-react-app)

### References
- [React-starter](https://github.com/kriasoft/react-starter-kit)
- [Frontend masters](https://frontendmasters.com/)
- [React-scripts](https://github.com/facebookincubator/create-react-app)


## File Structure
This Project uses `style-components` in rendering styles.
Each of the files in components directory has `styles.js` which is basically the `styled-components` source code.
