import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../../store/configureStore';

import getVisibleExpenses from '../../selectors/expenses';

import App from '../App/App';

import {
  addExpense,
  removeExpense,
  editExpense,
  startSetExpenses
} from '../../actions/expenses';

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';

const store = configureStore();

export const fetchInitialData = () => {
  return store.dispatch(startSetExpenses());
};

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
