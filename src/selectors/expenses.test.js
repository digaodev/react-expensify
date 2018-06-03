import moment from 'moment';

import expenses from '../tests/fixtures/expenses';

import getVisibleExpenses from './expenses';

test('should filter by text value and sort by date', () => {
  const filters = {
    text: 'c',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by start date and sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date and sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});
