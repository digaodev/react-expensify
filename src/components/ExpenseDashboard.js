import React from 'react';

import VisibleExpenseList from '../containers/VisibleExpenseList/VisibleExpenseList';

import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboard = () => (
  <div>
    <ExpensesSummary />

    <ExpenseListFilters />

    <VisibleExpenseList />
  </div>
);

export default ExpenseDashboard;
