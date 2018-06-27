import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBqBJ-4IeTXrmxrn5jKC-cjxwAK31FDOQA',
  authDomain: 'react-expensify-b64a1.firebaseapp.com',
  databaseURL: 'https://react-expensify-b64a1.firebaseio.com',
  projectId: 'react-expensify-b64a1',
  storageBucket: 'react-expensify-b64a1.appspot.com',
  messagingSenderId: '1096814733468'
};

firebase.initializeApp(config);

const database = firebase.database();

