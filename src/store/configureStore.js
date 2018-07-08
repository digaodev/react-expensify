import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { expenses, filters, auth } from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      expenses,
      filters,
      auth
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

  return store;
};
