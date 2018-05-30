import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store/configureStore';

import getVisibleExpenses from '../../selectors/expenses';

import App from '../App/App';

import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';

const store = configureStore();
store.subscribe(() => console.log(store.getState()));

const exp1 = store.dispatch(
  addExpense({
    description: 'rent',
    note: 'some note on rent',
    amount: 4500,
    createdAt: 2000
  })
);
const exp2 = store.dispatch(
  addExpense({
    description: 'water',
    note: 'some note on water',
    createdAt: 1000
  })
);
const exp3 = store.dispatch(
  addExpense({
    description: 'amenities',
    note: 'some note on amenities',
    amount: 8000
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
console.log(getVisibleExpenses(storeState.expenses, storeState.filters));
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}
