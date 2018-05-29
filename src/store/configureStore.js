import {
  createStore,
  combineReducers
} from 'redux';

import {
  expenses,
  filter
} from '../reducers';

export default () => {
  const store = createStore(
    combineReducers({
      expenses,
      filter
    })
  );

  return store;
}