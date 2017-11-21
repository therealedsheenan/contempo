![logo contempo](https://github.com/therealedsheenan/contempo/blob/master/contempo.png)

# Contempo [![Build Status](https://travis-ci.org/therealedsheenan/contempo-python-api.svg?branch=master)](https://travis-ci.org/therealedsheenan/contempo-python-api) [![Dependency Status](https://dependencyci.com/github/therealedsheenan/contempo/badge)](https://dependencyci.com/github/therealedsheenan/contempo) [![Code Climate](https://codeclimate.com/github/therealedsheenan/contempo/badges/gpa.svg)](https://codeclimate.com/github/therealedsheenan/contempo/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/7fa03b23e5b944ec829462159e2265fd)](https://www.codacy.com/app/therealedsheenan/contempo?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=therealedsheenan/contempo&amp;utm_campaign=Badge_Grade)
Starter development environment for React.
This repository is a starter development environment for creating apps(specifically for React) using webpack.

## Installation
This has a client and server environment.
Here are the following commands to install the environment.

- Make sure you have [YARN](https://yarnpkg.com/) installed in your system.
- To install yarn run `yarn install`

#### Client-side rendering

#### Using Grunt Assets
`npm run assets`  - Runs the task that handles the assets

`npm run client:dev` - Runs client-side rendering development environment.

`npm run client:prod` - Runs client-side rendering production.

#### Server-side rendering

`npm run server:dev` - Runs server-side rendering development environment.

`npm run server:prod` - Runs webpack in production.

`npm run server` - Runs the node server.

Access: `http://localhost:4200`

`npm test` - Runs the jest testing.
`npm run eslint` - Runs the eslint.

#### Flow types
`npm run flow` - Runs flow type checker 

#### Formatting
`npm run format` - Runs the prettier formatter

#### Linting
`npm run lint` - Runs the linter

#### Test
`npm test` - Runs the test suite

#### Asynchronous routes / components
Asynchronously load routes or components by using the async component.
Checkout react-loadable here: https://github.com/thejameskyle/react-loadable

### References
- [React-starter](https://github.com/kriasoft/react-starter-kit)
- [Frontend masters](https://frontendmasters.com/)
- [React-scripts](https://github.com/facebookincubator/create-react-app)

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

### Deployment
You have to bundle all the scripts in production mode.
If you want client-side production bundle and deployment:

```
$ npm run deploy:client # yarn deploy:client
```

If you want server-side production bundle and deployment:

```
$ npm run deploy:prod # yarn deploy:client
```


### Additional important directories:

`client` - customizable configurations for the client-side rendering.

`server` - customizable configurations for the server-side rendering.

`tools` - customizable development configurations(webpack). You can add additional dev tools from here.

`public` - rendered directory.
