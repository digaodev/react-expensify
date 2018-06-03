import moment from 'moment';

import getVisibleExpenses from './expenses';

const expenses = [
  {
    id: 1,
    description: 'Rent',
    note: 'Pay rent',
    amount: 1500.5,
    createdAt: 0
  },
  {
    id: 2,
    description: 'Groceries',
    note: 'Buy groceries',
    amount: 100,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: 3,
    description: 'Credit card',
    note: 'Pay credit card',
    amount: 150,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

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
