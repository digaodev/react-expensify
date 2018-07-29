# Expensify React App Project

* React project for an expense management app using React, Redux, Firebase and SASS.

![Screen Shot for login](https://github.com/digaodev/react-expensify/blob/docs/docs/Screen_login.png?raw=true)

![Screen Shot for login 2](https://github.com/digaodev/react-expensify/blob/docs/docs/Screen_login2.png?raw=true)

![Screen Shot for dash](https://github.com/digaodev/react-expensify/blob/docs/docs/Screen_dash.png?raw=true)

![Screen Shot for add](https://github.com/digaodev/react-expensify/blob/docs/docs/Screen_add.png?raw=true)

![Screen Shot for date](https://github.com/digaodev/react-expensify/blob/docs/docs/Screen_date.png?raw=true)

![Screen Shot for dash 2](https://github.com/digaodev/react-expensify/blob/docs/docs/Screen_dash2.png?raw=true)

## How to run

To get started:

* install all project dependencies with `yarn install`

  Notable dependencies:
```js
    "firebase": "4.2.0",
    
    "history": "^4.7.2",
    
    "moment": "^2.22.1",
    
    "node-sass-chokidar": "^1.3.3",
    
    "npm-run-all": "^4.1.3",
    
    "numeral": "^2.0.6",
    
    "react-dates": "^16.7.0",

    "react-router-dom": "^4.2.2",

    "redux": "^4.0.0",
    
    "redux-thunk": "^2.3.0",
    
    "uuid": "^3.2.1"
```

* in order to use the app you will need a firebase account. Create one [here](https://firebase.google.com/). Go to the console and create a new app (remember to save your app's settings, we will use later for configuration within the app). Add the `Firebase Realtime Database` to your web app.

* if you are planning on running the test suite, please create a separate web app to avoid messing up the data and permissions.

* create 2 `.env` files, one for development (`.env.development`) and one for tests (`.env.test`) and add your web app configuration. You can find them in your firebase console:

```js
REACT_APP_FIREBASE_API_KEY=<YOUR API KEY>
REACT_APP_FIREBASE_AUTH_DOMAIN=<YOUR APP DOMAIN>
REACT_APP_FIREBASE_DATABASE_URL=<YOUR APP URL>
REACT_APP_FIREBASE_PROJECT_ID=<YOUR APP ID>
REACT_APP_FIREBASE_STORAGE_BUCKET=<YOUR APP BUCKET>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<YOUR APP MESSAGING ID>
```

* because the project was created using `create-react-app`, there are a few caveats to consider when using `.env`. You can read about it [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables)

* enable the Google sign-in provider in the `Sign-in method` tab in `Authentication` on the firebase console.

* you can add an extra layer of security and data validation to your database. If you do this to your test database you will break the test suite. For your development web app database, add these lines to your database `Rules` tab in `Database` on the firebase console:

```json
{
  "rules": {
    ".read": false,
    ".write": false,
    "users":{
      "$user_id":{
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid",
        "expenses": {
        	"$expense_id":{
            ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
            "description": {
              ".validate": "newData.isString() && newData.val().length > 0"
            },
            "note": {
              ".validate": "newData.isString()"
            },
            "createdAt": {
              ".validate": "newData.isNumber()"
            },
            "amount": {
              ".validate": "newData.isNumber()"
            },
          	"$other": {
         		".validate": false
        		}
          }
        },
        "$other": {
          ".validate": false
        }
      }
    }
  }
}
```

* run the project tests with `yarn test`

![Screen Shot for tests](https://github.com/digaodev/react-expensify/blob/docs/docs/Screen_tests.png?raw=true)

* start the development server with `yarn start`

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
