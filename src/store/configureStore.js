import {
  createStore,
  combineReducers
} from 'redux';

import {
  expenses,
  filters
} from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      expenses,
      filters
    })
  );

  return store;
}