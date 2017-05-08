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

#### Asynchronous routes / components
Asynchronously load routes or components by using the async component:

```
import Async from '../components/Async/AsyncComponent';

<Route exact path="/" component={Async(System.import('PATH_TO_COMPONENT'))} />
```

Apply lazy loading by editing the AsyncComponent's LoadingComponent method.

#### Under the hood:
 - Before running the various builds, npm scripts runs the prebuild `rimraf` command
that cleans up the public directory. This public directory servers as the output of all the builds.

- After running the build, npm scripts also copies assets to public directory.
- This adapts most of the functionalities from the [React-scripts](https://github.com/facebookincubator/create-react-app)

### References
- [React-starter](https://github.com/kriasoft/react-starter-kit)
- [Frontend masters](https://frontendmasters.com/)
- [React-scripts](https://github.com/facebookincubator/create-react-app)

### Feature Trade-offs
Using hot-reloading, code-splitting and server-rendering with react-route v4 seems very cumbersome to implement.
Instead, this repo implements hot-realoading + code-splitting for the meantime.

If you want to use the server rendering feature, you can use `src/client/config/server.jsx`.
This route file is simplified so that you can server-render your app using simple routes.
On the other hand, the `src/client/config/split.jsx` route file is configured to best render the app using the code-splitting + 
hot-reloading feature.

## File Structure
This Project uses `style-components` in rendering styles.
Each of the files in components directory has `styles.js` which is basically the `styled-components` source code.
