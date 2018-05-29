import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
} from '../../actions/filter';

const store = configureStore();
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
store.dispatch(removeExpense({ id: exp2.expense.id }));
store.dispatch(
  editExpense(exp1.expense.id, {
    description: 'updated desc',
    note: 'updated note',
    amount: 5000
  })
);

store.dispatch(setTextFilter(''));
store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(100));
store.dispatch(setStartDate());
store.dispatch(setEndDate(200));
store.dispatch(setEndDate());

const storeState = store.getState();
console.log(getVisibleExpenses(storeState.expenses, storeState.filter));
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }
}
