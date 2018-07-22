import React from 'react';

import { connect } from 'react-redux';

import { startAddExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const AddExpense = ({ onSubmit }) => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>

      <div className="content-container">
        <ExpenseForm onSubmit={onSubmit} />
      </div>
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

export default connect(
  null,
  mapDispatchToProps
)(AddExpense);
