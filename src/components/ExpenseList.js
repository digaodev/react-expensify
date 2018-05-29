import React from 'react';

const ExpenseList = ({ expenses }) => (
  <div>
    <h1>ExpenseList</h1>
    <ul>
      {expenses.map(expense => <li key={expense.id}>{expense.description}</li>)}
    </ul>
  </div>
);

export default ExpenseList;
