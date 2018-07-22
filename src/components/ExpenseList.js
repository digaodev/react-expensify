import React from 'react';

import ExpenseListItem from './ExpenseListItem';

const ExpenseList = ({ expenses }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>

    <div className="list-body">
      {expenses.length === 0 ? (
        <div>
          <span className="list-item list-item--message">
            You have no expenses to list
          </span>
        </div>
      ) : (
        <ul>
          {expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default ExpenseList;
