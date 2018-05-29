import React from 'react';

import ExpenseListItem from './ExpenseListItem';

const ExpenseList = ({ expenses }) => (
  <div>
    <h1>ExpenseList</h1>
    <ul>
      {expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
    </ul>
  </div>
);

export default ExpenseList;
