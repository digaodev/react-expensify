import moment from 'moment';

import expenses from '../tests/fixtures/expenses';

import expensesReducer from './expenses';

import { ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE } from '../actions/expenses';

test('should setup default state values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should add an expense with provided values', () => {
  const expense = {
    description: 'Buy PC',
    note: 'Buy a new PC',
    amount: 2000,
    createdAt: 10000
  };

  const action = {
    type: ADD_EXPENSE,
    expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('should remove expense by id', () => {
  const action = { type: REMOVE_EXPENSE, id: expenses[1].id };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});
test('should NOT remove expense if id not found', () => {
  const action = { type: REMOVE_EXPENSE, id: 99999 };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should edit expense by id', () => {
  const updates = { note: 'Buy food', amount: 200 };

  const action = {
    type: EDIT_EXPENSE,
    id: expenses[1].id,
    updates
  };

  const state = expensesReducer(expenses, action);

  expect(state[1].note).toEqual(updates.note);
  expect(state[1].amount).toEqual(updates.amount);
});
test('should NOT edit expense if id not found', () => {
  const updates = { note: 'Buy food', amount: 200 };

  const action = {
    type: EDIT_EXPENSE,
    id: 99999,
    updates
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
