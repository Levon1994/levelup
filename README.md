### Welcome to Level Up IT Center

![Jest watch mode](https://firebasestorage.googleapis.com/v0/b/newproject-b6af4.appspot.com/o/level%20up%20cover%20700%20px.jpg?alt=media&token=a8c09644-d1d8-428a-841b-32e6c3d5fcff)


This project was created with React.js and Node.js.

You can see the project from [Level Up IT Center](https://levelup.am).

## Client side

For running client side will need only this two commands:

* `npm i` is a for getting node_modules.
* `npm start` is a command for running project.

Runs the app in the development mode.<br>
Open [http://localhost:5050](http://localhost:5050) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

* `npm run build` builds the app for production to the build folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

# Folder Structure

```
client/
  node_modules/
  .env
  package.json
  README.md
  public/
    favicon/
    404.html
    mainifest.json
    index.html
    favicon.ico
  src/
    actions/
    admin/
    assets/
    components/
      common/
      sections/
    containers/
    elements/
    helpers/
    reducers/
    stores/
    utils/
    animate.scss
    App.js
    App.scss
    index.js
    main.scss
    media.scss
    registerServiceWorker.js
    ScrollToTop.js
    translate.js
```

**Package.json**

```json
{
  "name": "levelup",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^3.9.2",
    "@material-ui/icons": "^3.0.2",
    "axios": "^0.18.0",
    "classnames": "^2.2.5",
    "custom-react-scripts": "0.2.2",
    "firebase": "^5.8.2",
    "formsy-react": "^1.1.3",
    "google-maps-react": "^2.0.2",
    "lodash": "^4.17.5",
    "material-ui": "^1.0.0-beta.38",
    "moment": "^2.24.0",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "react-slick": "^0.23.1",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0",
    "slick-carousel": "^1.8.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

## Server side

For running server side will need only this two commands:

* `npm i` is a for getting node_modules.
* `npm start` is a command for running project.

Server listen [http://localhost:8080](http://localhost:5050) to view it in the browser.

# Folder Structure

```
server/
  api/
    models/
    routes/
  node_modules/
  views/
  .gitignore
  app.js
  config.js
  index.js
  nodemon.json
  package.json
  Procfile
```

**Package.json**

```json
{
  "name": "level-up",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Levon1994/levelup.git"
  },
  "author": "Levon Azizyan",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Levon1994/levelup/issues"
  },
  "homepage": "https://github.com/Levon1994/levelup#readme",
  "dependencies": {
    "body-parser": "^1.18.3",
    "ejs": "^2.6.1",
    "express": "^4.16.4",
    "heroku": "^7.19.4",
    "html-pdf": "^2.2.0",
    "jsonwebtoken": "^8.4.0",
    "mongoose": "^5.3.8",
    "morgan": "^1.9.1",
    "nodemailer": "^5.1.1",
    "xoauth2": "^1.2.0"
  },
  "devDependencies": {
    "nodemon": "^1.18.5"
  }
}
```