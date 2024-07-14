# Angular-React Microfrontend Project

This project demonstrates the integration of a React project into an Angular project using micro frontend architecture. The React project provides a grid component capable of handling large datasets and a dropdown component, which are used as web components within the Angular project.

## Project Structure

- `react-microfrontend`: Contains the React project.
- `angular-microfrontend`: Contains the Angular project.

## Prerequisites

- Node.js and npm installed
- Angular CLI installed
- React Scripts installed

## Steps to Build and Integrate

### 1. Build React Project

1. Navigate to the `react-microfrontend` directory.
2. Install the dependencies by running `npm install`.
3. Build the React project by running `npm run build`.

### 2. Copy `main.js` and `styles.css` to Angular Assets from React build

1. Copy the concatenated files (`main.js` and `styles.css`) from react-microfrontend/build to the Angular project's assets directory. (You may automate this process with a pipeline.)
2. Update the `package.json` scripts to include the copying step after the build.

### 3. Build Angular Project

1. Navigate to the `angular-microfrontend` directory.
2. Install the dependencies by running `npm install`.
3. Serve or build the Angular project by running `ng serve`.

### 4. Angular Configuration

1. Ensure that the `angular.json` file includes the copied assets (`main.js` and `styles.css`).

### 5. Use React Components in Angular Project

1. Use the React components in your Angular
