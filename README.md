# stocknews
![Build Status](https://github.com/theking9985/stocknews/workflows/CI/badge.svg)

## Contributing

- **Language** - Typescript
- **Front End** - React
- **Web Server** - Express
- **Testing** - Jest
- **Linting** - eslint, prettier, we extend the [Airbnb style guide](https://github.com/airbnb/javascript) 
- **Compiling** - Webpack, Typescript

### Getting started

1. `yarn install`

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />

#### `npm test`

Runs the test suite

#### `npm test:coverage`

Runs the test suite **and** output a coverage report

#### `npm run build`

Builds the app for production to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

#### `npm run build:watch`

Same as `build` but watch for changes

#### `npm run lint`

Show all lint errors

#### `npm run lint:fix`

Automatically fix some lint errors and show the rest in the console

### Contributing code
1. Do not push updates directly to `master`. Create a branch off of master with the name `feature/my-cool-feature` or `bugfix/fixed-critical-bug`
2. Merging your branch into `master` must happen through a pull request.
3. Only merge your pull requests if:
    1. It's been approved
    2. All tests are passing
    3. There are no lint errors. Warnings are alright
