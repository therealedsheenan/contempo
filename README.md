![logo contempo](https://github.com/therealedsheenan/contempo/blob/master/contempo.png)

# Contempo [![Build Status](https://travis-ci.org/therealedsheenan/contempo-python-api.svg?branch=master)](https://travis-ci.org/therealedsheenan/contempo-python-api) [![Dependency Status](https://dependencyci.com/github/therealedsheenan/contempo/badge)](https://dependencyci.com/github/therealedsheenan/contempo) [![Code Climate](https://codeclimate.com/github/therealedsheenan/contempo/badges/gpa.svg)](https://codeclimate.com/github/therealedsheenan/contempo/)
Starter development environment for React.
This repository is a starter development environment for creating apps(specifically for React) using webpack.

## Installation
This has a client and server environment.
Here are the following commands to install the environment.

- Make sure you have [YARN](https://yarnpkg.com/) installed in your system.
- To install yarn run `yarn install`

#### Client-side rendering

`npm run client:dev` - Runs client-side rendering development environment.

`npm run client:prod` - Runs client-side rendering production.

#### Server-side rendering

`npm run server:dev` - Runs server-side rendering development environment.

`npm run server:prod` - Runs webpack in production.

`npm run server` - Runs the node server.

#### Using Grunt Assets
`npm run assets`  - Runs the task that handles the assets


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


### Code Splitting and Lazy-loading methods
There are methods in implementing asynchronous routes, lazy loading components and bundle loading.

1.) Asynchronous Component

Component Directory:  `src/components/AsyncComponent`

```
  import { asyncComponent } from 'react-async-component';
  import { Route } from 'react-router-dom';
  
  import 'PATH_TO_COMPONENT.js'
  
  <Route path="/" component={asyncComponent(Syste.import('PATH_TO_COMPONENT.js'))} />
```
Note that you have to separately import the component to be asynchronously loaded.

2.) Asynchronous routes
Component Directory:  `src/components/AsyncComponent`

```
  import { asyncComponent } from 'react-async-component';
  import { Route } from 'react-router-dom';

  <Route
    exact
    path="/"
    component={
      props => <AsyncRoute props={props} loadingPromise={System.import('../../containers/Home/HomeContainer')} />
    }
  />
```

3.) Bundle loader - The same as async routes but this uses the bundle-loader plugin.
Component Directory:  `src/components/BundleLoader/BundleLoader`

```
  import { Route } from 'react-router-dom';
  import MyComponent from 'PATH_TO_MY_COMPONENT.js';
  
  <Route
    exact
    path="/style"
    component={
      props => <Bundle {...props} component={MyComponent} />
    }
  />
```

## Coding Guideline:

### Main source Directory :`./src/`

Here are the descriptions of each folders:

`assets` - directory for media files.

`components` - directory for all of the react presentational components.
Each of this folder should consist the main presentational component files and a `styles.js`.
This `styles.js` file is where all of the `styled-components` code is located.


`containers` - directory for all of the react container components.
Ideally, you should put all of styled components code on the presentational components directry, however,
since you can basically add an inline `styled-component` code from here.


`config` - directory for all of the react configurations. e.g: routes, redux store and etc...


`helpers` - directory for helper code snippets.

`redux` - directory for all of the redux-related code(actions, reducers, action types).

`styles` - directory for all of the common `styled-components` code and base CSS or SCSS files.
This directory is different from the components directory's `styles.js`. `styles.js` from the components
directory are only specific to the react-presentational styles of the current directory.

