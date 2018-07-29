import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './firebase/firebase';
import { firebase } from './firebase/firebase';

import configureStore from './store/configureStore';

import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

import App, { history } from './containers/App/App';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(root, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));

    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
