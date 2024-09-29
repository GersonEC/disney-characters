# Disney Character's application

For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption.

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

- [tanstack/query](https://tanstack.com/query/latest) to handle the server state that the derive from api cals.
- [tanstack/router](https://tanstack.com/router/latest) to handle the routing within the application.
- [testing-library/react](https://testing-library.com/) for testing purposes.
- [zod](https://www.npmjs.com/package/react-loading-icons) to validate the types of our server state
- react-loading-icons to show a feedback to the user when loading server state.
