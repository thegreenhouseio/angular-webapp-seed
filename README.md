# angular2-webpack-seed (seed-webapp-1.0)
Angular 2 and Webpack Seed Project for The Greenhouse, as a template / starter project for frontend web applications.
This is a simple starter project meant to get you up and running as fast as possible with a full local and production
build with all the tools working together and as minimal friction and configuration as possible.  Simply clone the
repo and edit the files as needed to match your project.

This was based on the excellent starter [AngularClass/angular2-webpack-starter] as well as many other resources
around the internet.

**Note:**
A principal motivation in the direction and maintenance of this starter repo will be in support of adoption of latest standards and specifications of ECMAScript.  For example, the decision to adopt Webpack was done with the understanding that ES6 `imports` and the System specification would be supported in the 2.0 release.  This project will always strive to work as close to the spec as possible to ensure the least amount of tools get in the way between your user's browser and the source code written.

[AngularClass/angular2-webpack-starter]: https://github.com/AngularClass/angular2-webpack-starter

## Seed Setup
- _README.md_ - project name, Links, sections on release procedure, CI, AWS info
- _gulpfile.babel.js_ - API proxy
- _package.json_ - name, description, version
- _karma.conf.js_ - jUnitReporter suite name
- _webpack.config.dev.js_ - devServer proxy value
- Configure your project with continuous integration by running _bin/build.sh_

//TODO - discuss environment variables, continuous integration, AWS keys, build scripts

You can delete this after using.

## Tooling
The following tools are used in the application

- [Angular][] - as the Front-End framework
- [Webpack][] - Module loader / bundler, primary build tool
- [Node][] - local development and build time JavaScript runtime
- [Yarn][] - package manager for build and application dependencies
- [TypeScript][] - superset of JavaScript for writing application code
- [Karma][] - task runner for unit and integration testing
- [Jasmine][] - testing framework
- [Bootstrap][] 4 (alpha) - Mobile first CSS framework

[Node]: https://nodejs.org/
[Yarn]: https://www.yarnpkg.com/
[Angular]: https://angular.io/
[TypeScript]: https://www.typescriptlang.org/
[Webpack]: https://webpack.github.io/
[Karma]: https://karma-runner.github.io/1.0/index.html
[Jasmine]: http://jasmine.github.io/
[Bootstrap]: http://v4-alpha.getbootstrap.com/

## Links
* Repository (Github)- **TODO: your-link-here**
* Issue Tracker (JIRA) - **TODO: your-link-here**
* Documentation (Confluence) - **TODO: your-link-here**
* Continuous Integration (Jenkins) - **TODO: your-link-here**
* Development Environment - **TODO: your-link-here**
* Production Enviornment - **TODO: your-link-here**

## Project Setup
**Note**: It is recommended that a Javascript based IDE is used, like [Webstorm][],
as they have a lot of the code quality and syntax tooling supported as plugins, often times right out of the box.

Recommended plugins to have are:
- Git (can show changed lines in the gutter when viewing a file)
- EditorConfig
- gitignore
- Sass
- TypeScript
- NodeJS

[Webstorm]: https://www.jetbrains.com/webstorm/

### Installation

1. If you don't already have it, download and install NodeJS
2. This project favors Yarn so make sure you have the latest by updating it after installing Node by running

```
$ npm install -g yarn@0.24.5
```

3) Now install the build and application dependencies by running `$ yarn install`

## Project Layout
An overview of important files and configurations for the applications

### Root Files
Also know as "dot" files, these are the build and build configuration files for the application

* _bin/_ - shell scripts for continuous and build environments
* _.babelrc_ - [Babel][] configuration file for supporting ES6 features _gulpfile.js_
* _.eslintrc_ - [ESLint][] configuration file for linting build files (webpack configs, karma conf, etc)
* _.editorconfig_ - configuration file for EditorConfig IDE plugin
* _karma.conf.js_ - Karma configuration file
* _gulpfile.babel.js_ - Gulpfile for startting local production webserver
* _package.json_ - NPM dependency configuration file, for build related dependencies and defines all runnable scripts and commands
* _tsconfig.json_ - TypeScript compiler configuration file
* _tslint.json_ - configuration rules for [TS Lint][]
* _webpack.config.common.js_ - webpack config for managing shared webpack configurations
* _webpack.config.developjs_ - webpack config for local development
* _webpack.config.prod.js_ - webpack config for production builds

### Application Files
Application code, including unit tests.  Directories are intended to be kept as flat as possible with a B.O.F. (birds of
a feather) organization.
* _src_ - application code
* _src/components/_ - resusable UI features
* _src/services/_ -  APIs for handling  backend REST APIs or browser APIs, non UI related "helpers"
* _src/views/_ -  routable states ("pages")
* _src/index.html_ - main layout of the application
* _src/main.ts_ - main entry way into the application and Angular "bootstrapper" (`@NgModule`)
* _src/polyfills.ts_ - collection of polyfills needed by the application
* _src/routes.ts_ - routes for the application, maps to different views
* _src/vendor.ts_ - vendor files from _node_modules_

[Babel]: https://babeljs.io/
[ESLint]: http://eslint.org/
[TS Lint]: http://palantir.github.io/tslint/

## Tasks
This project uses Webpack as the build tool, exectuted via NPM scripts.  All available tasks are in the `scripts`
section of _package.json_

### Development
This will start up a Node (Express) server which watches for changes and "redeploys" as needed.

```
$ yarn run develop
```

See it in a browser by opening up (though this should be done automatically for you)

```
http://localhost:6789/
```


### Production
This is the production build task for the project.  It is used prior to deploying to an environment and build a
production version of the application.

```
$ yarn run build
```

###  Testing
Testing is an important part of software development.  There are three types of automated testing supported:

1. Unit - Used for testing discrete pieces of code in an isolated environemnt (i.e. mocked dependencies).  Ideal for testing services and componengs.
2. Integration - Often we want to test how components and services behavior together without mocking.  Integration testing is ideal for testing our view components.
3. E2E - End-to-End testing uses real browsers (often multiple) and aims to simulate real user ineractions with the application.  This is done to validate our critical User Stories.

To run unit and integration tests, run

```
$ yarn run test
```


To run E2E tests, run:
```
$ yarn run e2e
```

**Note: E2E testing is not supported yet**

### Continuous Integration
This is a task for the CI server to run, generally called as part of a build script, in this case _bin/build.sh_.  Run it using

```
$ yarn run ci
```

This will run (in sequence) the `build` and `test` tasks.  See bin/build.sh for the full build script, 


### Serve
To serve a production build locally , like for a demo run:

```
$ yarn run serve
```

**Note: it is recommended you run this command from the master branch or a tag.  By Default this proxies with the
 webpack-dev-server proxy.**


## Dependency Management
There are two types of dependencies tracked in the application

### Node Modules
Build packages (like Webpack) are installed through NPM into _package.json_, using

```
$ yarn add <package-name>  --dev
```

Dependencies for the application (like Angular) are installed by running

```
$ yarn add <some-package>
```

### TypeScript Type Defintions
Typescript definitions provide type information for third-party packages and can be installed with NPM

`$ yarn install @type/{name} --save-dev`

Then add that name to the `compilerOptions.types` array in _tsconfig.json_

## Continuous Integration
**//TODO Document Your Continuous Integration Environment Here**


## Release Procedure
**//TODO Document Your Release Procedure Here**


## AWS Info
**//TODO Document Your AWS Info here (NO CREDENTIALS!!!!)**
* s3 bucket -
* cloudfront distribution -