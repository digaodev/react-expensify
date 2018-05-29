import {
  ADD_EXPENSE,
  REMOVE_EXPENSE
} from '../actions/expenses'

const expensesDefaultState = [];

const expenses = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.id);
    default:
      return state;
  }
}

export default expenses;