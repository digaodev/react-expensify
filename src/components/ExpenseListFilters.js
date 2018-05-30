import React from 'react';

import { connect } from 'react-redux';

import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = ({ filters, handleChange, handleSelect }) => (
  <div>
    <input
      type="text"
      name="textFilter"
      id="textFilter"
      value={filters.text}
      onChange={e => handleChange(e.target.value)}
    />
    <select
      name="sortFilter"
      id="sortFilter"
      onChange={e => handleSelect(e.target.value)}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChange: value => {
      dispatch(setTextFilter(value));
    },
    handleSelect: value => {
      if (value === 'date') {
        dispatch(sortByDate(value));
      } else if (value === 'amount') {
        dispatch(sortByAmount(value));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
