import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { expenses, filter } from './reducers';
import { createStore, combineReducers } from 'redux';
import { addExpense, removeExpense } from './actions/expenses';

const store = createStore(
  combineReducers({
    expenses,
    filter
  })
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(
  addExpense({ description: 'some desc', note: 'some note', amount: 1000 })
);
const exp1 = store.dispatch(
  addExpense({ description: 'some desc 2', note: 'some note 2', amount: 2000 })
);
store.dispatch(removeExpense({ id: exp1.expense.id }));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
