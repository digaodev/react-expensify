import React from 'react';

import { connect } from 'react-redux';

import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const EditExpense = ({ editingExpense, onSubmit, handleRemove }) => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
          <h2>Editing "{editingExpense.description}"</h2>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm onSubmit={onSubmit} expense={editingExpense} />

        <button
          type="button"
          className="button button--secondary"
          onClick={() => handleRemove(editingExpense.id)}
        >
          Remove Expense
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  return {
    editingExpense: state.expenses.find(
      expense => expense.id === match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, { history, match }) => {
  return {
    onSubmit: updatedExpense => {
      dispatch(startEditExpense(match.params.id, updatedExpense));
      history.push('/');
    },
    handleRemove: id => {
      dispatch(startRemoveExpense({ id }));
      history.push('/');
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpense);
