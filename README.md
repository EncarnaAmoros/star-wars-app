# Star Wars React App

This app offers information about the Star Wars universe and gets its data from [SWAPI](https://swapi.dev/).

## Project scripts

In the project directory, you can run:

#### `yarn install`

It installs the necessary package dependencies. That way, we can start and run the project.

#### `yarn start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in interactive watch mode. More information [here] (https://facebook.github.io/create-react-app/docs/running-tests)

#### `yarn lint`

It analyzes and displays errors in the project using EsLint.

#### `yarn lint:fix`

It solves errors in the project detected by EsLint.

#### `yarn format`

It formats project files using the format confifuration we have with Prettier.

#### `yarn build`

It builds the app for production to the `build` folder.

#### `yarn eject`

_Note: once you `eject`, you can’t go back!_

It will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project, so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

## Project structure

This is the structure used in this project:

- node_modules: directory that will be created when we run the instalation command in the project

- public: static resources

- src:

  - index.tsx: app entry

  - components: UI reusable components not related to any app domain _(e.g., button, loader, modal)_

  - app: common files for the app _(e.g., saga, reducer, store, types, messages, constants, mocks)_ & domain components & pages directories

    - components: UI reusable components related to the app domain _(e.g., character, planet)_

    - mocks: mocked data for tests

    - services: files to fetch SWAPI info

    - not-found: page for routes not found

    - people: page to see and interact with Star Wars people info

## Resources used

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For some of the UI components, CSS and icons we are using [PrimeReact](https://primereact.org/). To apply some CSS rules we are using also [Tailwind CSS](https://tailwindcss.com/).

This app was made using: React, TypeScript, Redux, Redux Saga, Redux Toolkit, React Router DOM. For Testing: Jest Testing Library. Errors control and format: EsLint & prettier.
