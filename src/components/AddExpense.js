import React from 'react';

import { connect } from 'react-redux';

import { startAddExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const AddExpense = ({ onSubmit }) => {
  return (
    <div>
      <h1>Add Expense</h1>

      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    onSubmit: newExpense => {
      dispatch(startAddExpense(newExpense));
      history.push('/');
    }
  };
};

export default connect(null, mapDispatchToProps)(AddExpense);
