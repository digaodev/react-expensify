import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE
} from '../actions/expenses'

const expensesDefaultState = [];

const expenses = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case REMOVE_EXPENSE:
      return state.filter(({
        id
      }) => id !== action.id);
    case EDIT_EXPENSE:
      return state.map(expense => {
        if(expense.id !== action.id) return expense;

        return {...expense, ...action.updates}
      });
    default:
      return state;
  }
}

export default expenses;