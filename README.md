# Disney Characters application

## Setup

After cloning the repository and get inside of it, run the following scripts to install the dependencies and run the local application:

```js
- npm install
- npm run dev
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
It has been created with:

```js
npm create vite@latest
```

## Documentation Api's

The api's to get all the characters informations has been taken from this url: [disneyapi.dev](https://disneyapi.dev/docs/)

## Technology Stack

The following are the main libraries inside the application

- tanstack/react-query to handle the server state that the derive from api cals.
- tanstack/router to handle the routing within the application.
- testing-library/react for testing purposes
- zod to validate the types of our server state
- react-loading-icons to show a feedback to the user when loading server state.
