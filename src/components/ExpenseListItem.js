import React from 'react';

import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({
  id,
  description,
  note,
  amount,
  createdAt,
  handleRemove
}) => (
  <li>
    <div>
      <p>Description: {description}</p>
      <p>Note: {note}</p>
      <p>Amount: {amount}</p>
      <time>Created: {createdAt}</time>
    </div>

    <button type="button" onClick={() => handleRemove(id)}>
      Remove
    </button>
  </li>
);

const mapDispatchToProps = dispatch => {
  return {
    handleRemove: id => {
      dispatch(removeExpense({id}));
    }
  };
};

export default connect(null, mapDispatchToProps)(ExpenseListItem);
