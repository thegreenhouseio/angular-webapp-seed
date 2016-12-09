# angular2-webpack-seed (seed-webapp-1.0)
Angular 2 and Webpack Seed Project for The Greenhouse, as a template / starter project for frontend web applications.
This is a simple starter project meant to get you up and running as fast as possible with a full local and production 
build with all the tools working together and as minimal friction and configuration as possible.  Simply clone the 
repo and edit the files as needed to match your project.

This was based on the excellent starter [AngularClass/angular2-webpack-starter] as well as many other resources 
around the internet.

**Note:**
As this is primarily a JavaScript based repo, a principal motivation in the direction and maintenance of this starter repo will be in support of adoption of latest standards and specifications of ECMAScript.  For example, the decision to adopt Webpack now was done with the understanding that ES6 `imports` would be supported in the 2.0 release.  This project will always strive to work as close to the spec as possible to ensure the least amount of tools get in the way between your user's browser and the source code written.

[AngularClass/angular2-webpack-starter]: https://github.com/AngularClass/angular2-webpack-starter

## Setup
- _README.md_ - project name, Links, sections on release procedure, CI, AWS info
- _gulpfile.babel.js_ - API proxy
- _package.json_ - name, description, version
- _karma.conf.js_ - jUnitReporter suite name
- _webpack.config.dev.js - devServer proxy value
- Configure your project with continuous integration by running _bin/build.sh_

//TODO - discuss environment variables, continuous integration, AWS keys, build scripts

## Tooling
The following tools are used in the application

- [Angular][] 2 - as the Front-End framework
- [Webpack][] 1 - Module loader / bundler, primary build tool
- [Node][] 6  - local development and build time JavaScript runtime
- [NPM][] 3 - package manager for build and application dependencies
- [TypeScript][] 2.0 - superset of JavaScript for writing application code
- [Karma][] - task runner for unit testing
- [Jasmine][] - testing framework
- [Bootstrap][] 4 (alpha) - Mobile first CSS framework

[Node]: https://nodejs.org/
[NPM]: https://www.npmjs.com/
[Angular]: https://angular.io/
[TypeScript]: https://www.typescriptlang.org/
[Webpack]: https://webpack.github.io/
[Karma]: https://karma-runner.github.io/1.0/index.html
[Jasmine]: http://jasmine.github.io/
[Bootstrap]: http://v4-alpha.getbootstrap.com/

## Links
* Repository (Github)- TODO <link-here>
* Issue Tracker (JIRA) - TODO <link-here>
* Documentation (Confluence) - TODO <link-here>
* Continuous Integration (Jenkins) - TODO <link-here>
* Development Environment - TODO <link-here>
* Production Enviornment - TODO <link-here>

## Project Setup
*Note*: It is recommended that a Javascript based IDE is used, like [Webstorm][],
as they have a lot of the code quality and syntax tooling supported as plugins, often times right out of the box.

Recommended plugins to have are:
- Git (can show changed lines in the gutter when viewing a file)
- EditorConfig
- gitignore
- LESS
- TypeScript
- NodeJS

[Webstorm]: https://www.jetbrains.com/webstorm/

### Vagrant
This project provides Vagrant to provision Virtual Machines for use with development.  It is very easy to use

First, install the following

- [Vagrant][] for replicating production environments locally for development.  Version 1.7.4 required
- [VirtualBox][] the tool used by Vagrant to spin up the local VM.  Version >= 5.x required.  Make sure to download
guest additions as well.
- [Vagrant Manager][] an OSX GUI tool for managing Vagrant instances (optional)


1. Vagrant Up
```
vagrant up
```

2. SSH into the VM
```
vagrant ssh
```

3. Change into your workspace
```
cd /vagrant
```

[Vagrant]: http://www.vagrantup.com/
[VirtualBox]: http://www.virtualbox.org/
[Vagrant Manager]: http://vagrantmanager.com/

### Manual

1. If you don't already have it, download and install NodeJS 4.x (comes with NPM).

2. This project favors version 3.x or higher, so make sure you have the latest by updating it after installing Node by running 

```
$ npm install -g npm@3.8.8
```

3. Now install the build and application dependencies by running (Vagrant will do this for you)

```
$ npm install 
$ npm run install:typings
```

## Project Layout
An overview of important files and configurations for the applications

### Root Files ("dot" files)
Also know as "dot" files, these are the build and build configuration files for the application
* _bin/_ - shell scripts for continuous and build environments
* _.babelrc_ - configuration file Babel Gulpfile
* _editorconfig_ - configuration file for EditorConfig IDE plugin
* _karma.conf.js_ - Karma configuration file
* _gulpfile.babel.js_ - Gulpfile for startting local production webserver
* _package.json_ - NPM dependency configuration file, for build related dependencies and defines all runnable scripts and commands
* _tsconfig.json_ - TypeScript compiler configuration file
* _tslint.json_ - configuration rules for [TSLint][]
* _typings.json_ - Type Definitions configuration, for prividing _.d.ts_ files for the TypeScript compiler
* _webpack.config.common.js_ - webpack config for managing shared webpack configurations
* _webpack.config.dev.js_ - webpack config for local development
* _webpack.config.prod.js_ - webpack config for production builds

### Application Files
Application code, including unit tests.  Directories are intended to be kept as flat as possible with a B.O.F. (birds of
a feather) organization.  
* _src_ - application code
* _src/components/_ - resusable UI features
* _src/services/_ -  APIs for handling  backend REST APIs or browser APIs, non UI related "helpers"
* _src/views/_ -  routable states ("pages")
* _src/index.html_ - main layout of the application
* _src/main.ts_ - main entry way into the application and Angular "bootstrapper" (@NgModule)
* _src/polyfills.ts_ - collection of polyfills needed by the application
* _src/routes.ts_ - routes for the application, maps to different views
* _src/vendor.ts_ - vendor files from _node_modules_

[TSLint]: http://palantir.github.io/tslint/

## Tasks
This project uses Webpack as the build tool, exectuted via NPM scripts.  All available tasks are in the `scripts`
section of _package.json_

### Development
This will start up a Node (Express) server which watches for changes and "redeploys" as needed.

**Note: This task exports** `NODE_ENV=development`

```
$ npm run develop
```

See it in a browser by opening up

```
http://localhost:6789/
```

### Production
This is the production build task for the project.  It is used prior to deploying to an environment and build a 
production version of the application.

**Note: This task exports** `NODE_ENV=production`

```
$ npm run build
```

### Continuus Integration


### Demo
To serve a production build locally , like for a demo run:

```
$ npm run demo
```

**Note: it is recommended you run this command from the master branch or a tag.  By Default this proxies with the
 webpack-dev-server proxy.**


## Testing
To run unit tests locally using Karma, run 

```
$ npm run test:unit
```


## Dependency Management
There are two types of dependencies tracked in the application

#### Node Modules
Build packages (like Webpack) are installed through NPM into _package.json_, using
 
```
$ npm install <package-name>  --save-dev
```

Dependencies for the application (like Angular) are installed by running 

```
$ npm install <some-package> --save
```

#### TypeScript Typings
Typescript definitions provide type information for third-party packages and can be installed with NPM

`$ npm install @type/{name} --save-dev`

Then add that name to the `compilerOptions.types` array in _tsconfig.json_

## Continuous Integration
**//TODO Document Continuous Integration Environment Here**


## Release Procedure
**//TODO Document Release Procedure Here**


## AWS Info
**//TODO AWS Info here (NO CREDENTIALS!!!!)**
* s3 bucket - 
* cloudfront distribution - 
