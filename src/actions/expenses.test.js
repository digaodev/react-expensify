import {
  addExpense,
  ADD_EXPENSE,
  editExpense,
  EDIT_EXPENSE,
  removeExpense,
  REMOVE_EXPENSE
} from './expenses';

test('should setup add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
test('should setup add expense action object with provided values', () => {
  const expense = {
    description: 'Rent',
    note: 'Last month rent.',
    amount: 2000.5,
    createdAt: 2000
  };
  const action = addExpense(expense);

  expect(action).toEqual({
    type: ADD_EXPENSE,
    expense: {
      id: expect.any(String),
      ...expense
    }
  });
});

test('should setup edit expense action object', () => {
  const id = 1;
  const updates = { note: 'Pay rent', amount: 1500 };
  const action = editExpense(id, updates);

  expect(action).toEqual({
    type: EDIT_EXPENSE,
    id,
    updates
  });
});

test('should setup remove expense action object', () => {
  const id = 1;
  const action = removeExpense({ id });

  expect(action).toEqual({
    type: REMOVE_EXPENSE,
    id
  });
});
