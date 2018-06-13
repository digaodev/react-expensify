import selectExpensesTotal from '../selectors/expenses-total';
import expenses from '../tests/fixtures/expenses';
import { ENETRESET } from 'constants';

test('should return 0 if there are no expenses', () => {
  const res = selectExpensesTotal([]);

  expect(res).toBe(0);
});

test('should return correctly sum up a single expense', () => {
  const res = selectExpensesTotal([expenses[0]]);

  expect(res).toBe(expenses[0].amount);
});

test('should return correctly sum up all expenses', () => {
  const res = selectExpensesTotal(expenses);

  expect(res).toBe(1750.5);
});
