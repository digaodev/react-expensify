import {
  connect
} from 'react-redux';

import ExpenseList from '../../components/ExpenseList';

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

const VisibleExpenseList = connect(mapStateToProps)(ExpenseList);

export default VisibleExpenseList;