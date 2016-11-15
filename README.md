# Contempo
Starter development environment for React.
This repository is a starter development environment for creating apps(specifically for React) using webpack.

## Installation
This has a client and server environment.
Here are the following commands to install the environment.

- Make sure you have [YARN](https://yarnpkg.com/) installed in your system.
- To install yarn run `yarn install`

Checkout the package.json for various build commands.
#####
To run a basic development environment:
- `npm run dev`

######### There will be new commands in the following pushes #########

####Under the hood:
 - Before running the various builds, npm scripts runs the prebuild `rimraf` command
that cleans up the public directory. This public directory servers as the output of all the builds.

- After running the build, npm scripts also copies assets to public directory.

### References
- React-starter
- Frontend masters

###Disclaimer
This project is still in development.
Check this out for future updates.
