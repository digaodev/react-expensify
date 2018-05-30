import React from 'react';

import VisibleExpenseList from '../containers/VisibleExpenseList/VisibleExpenseList';

import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <hr />
    <ExpenseListFilters />
    <hr />
    <VisibleExpenseList />
  </div>
);

export default ExpenseDashboard;
