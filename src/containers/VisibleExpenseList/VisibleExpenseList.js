import {
  connect
} from 'react-redux';

import selectExpenses from '../../selectors/expenses';

import ExpenseList from '../../components/ExpenseList';

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

const VisibleExpenseList = connect(mapStateToProps)(ExpenseList);

export default VisibleExpenseList;