import uuidv4 from 'uuid/v4';

// CONSTANTS
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
})

export const removeExpense = ({
  id
}) => ({
  type: REMOVE_EXPENSE,
  id
});

export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});