# Customer Feedback App

## Demo public Heroku Url

This project has been deployed in heroku cloud.

Click on this [Live Demo](https://haneef-feedback.herokuapp.com/) to access the project in heroku cloud. 

## State Management

This project uses [React Redux](https://react-redux.js.org/) for state management

## Project Structure

This project is using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)

## Api Details

Backend Api project was built on Node JS (please refer [project source code](https://github.com/mhaneef50673/feedback-api) ) and hosted on heroku in [https://haneef-feedback-api.herokuapp.com/api](https://haneef-feedback-api.herokuapp.com/api)

This project uses the following apis,

| Api        | Description           | method  | live url  |
| ------------- |:-------------:| :-----:| -----|
| api/v1/feedbacks     | provides list of feedbacks | GET | https://haneef-feedback-api.herokuapp.com/api/v1/feedbacks |
| api/v1/feedback      | create a new feedback entry |  POST | https://haneef-feedback-api.herokuapp.com/api/v1/feedback |
| api/v1/feedback/analytics | provides feedback count by date |	GET | https://haneef-feedback-api.herokuapp.com/api/v1/feedback/analytics/ |

## UI Component Unit Testing

This project uses [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/) for UI component unit testing

## How to run this project locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
