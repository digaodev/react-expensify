import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { expenses, filter } from './reducers';
import { createStore, combineReducers } from 'redux';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from './actions/filter';

const store = createStore(
  combineReducers({
    expenses,
    filter
  })
);

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;

      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= endDate;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => console.log(store.getState()));

const exp1 = store.dispatch(
  addExpense({
    description: 'rent',
    note: 'some note',
    amount: 1000,
    createdAt: 100
  })
);
const exp2 = store.dispatch(
  addExpense({
    description: 'some desc 2',
    note: 'some note 2',
    amount: 2000,
    createdAt: 200
  })
);
// store.dispatch(removeExpense({ id: exp2.expense.id }));
// store.dispatch(
//   editExpense(exp1.expense.id, {
//     description: 'updated desc',
//     note: 'updated note',
//     amount: 5000
//   })
// );

// store.dispatch(setTextFilter(''));
// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(200));
// store.dispatch(setEndDate());

const storeState = store.getState();
console.log(getVisibleExpenses(storeState.expenses, storeState.filter));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
