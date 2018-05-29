import React from 'react';

const ExpenseListItem = ({ description, note, amount, createdAt }) => (
  <li>
    <p>Description: {description}</p>
    <p>Note: {note}</p>
    <p>Amount: {amount}</p>
    <time>Created: {createdAt}</time>
  </li>
);

export default ExpenseListItem;
