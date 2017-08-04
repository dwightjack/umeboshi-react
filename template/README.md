# {{fullName}}

> {{description}}

## Features
* [React](https://facebook.github.io/react/) and [Webpack](https://webpack.js.org/) with HMR 
* ES6+ and JSX with [Babel](https://babeljs.io/), [env](https://github.com/babel/babel-preset-env) and [stage-2](https://babeljs.io/docs/plugins/preset-stage-2/) presets
* Unit test with [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/)
* CSS and JS linting with [ESLint](http://eslint.org/) (airbnb preset) and [Stylelint](https://stylelint.io/)
* [Sass](http://sass-lang.com/) with [node-sass](https://github.com/sass/node-sass) 
* CSS [post-processing](https://github.com/postcss/postcss)
* [CSS Modules](https://github.com/css-modules/css-modules)
* Em based media-queries via [sass-mq](https://github.com/sass-mq/sass-mq)



## Requirements

* Node.js >= 6.9.0 (we strongly suggest to use something like [nvm](https://github.com/creationix/nvm))
* npm or [yarn](https://yarnpkg.com/lang/en/)

## Installation

1) Clone the repo

2) From project root:

* `npm install` or `yarn`

## Scripts

Either use `npm run <script>` or `yarn run <script>`

* `start`: start development mode
* `server`: run a static web server
* `test`: run jest
* `build`: generate a development build (will also lint files)
* `build:production`: generate a production build
* `eslint`: lint JS files
* `stylelint`: lint SCSS/CSS files
* `lint`: lint both styles and JS files


## Development 

To run the boilerplate in development mode (uses [webpack dev server](https://webpack.js.org/configuration/dev-server/)) run:

```
yarn start
```