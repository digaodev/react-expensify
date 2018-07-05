import React from 'react';

import { connect } from 'react-redux';

import { startEditExpense } from '../actions/expenses';
import { startRemoveExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const EditExpense = ({ editingExpense, onSubmit, handleRemove }) => {
  return (
    <div>
      <h1>Edit Expense</h1>
      <hr />
      <h2>Editing "{editingExpense.description}"</h2>
      <ExpenseForm onSubmit={onSubmit} expense={editingExpense} />

      <button type="button" onClick={() => handleRemove(editingExpense.id)}>
        Remove
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
