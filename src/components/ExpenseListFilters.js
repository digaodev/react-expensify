import React, { Component } from 'react';

import { connect } from 'react-redux';

import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters';

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  handleFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    const {
      filters,
      handleInputChange,
      handleSelect,
      handleDatesChange
    } = this.props;

    const { calendarFocused } = this.state;

    return (
      <div>
        <input
          type="text"
          name="textFilter"
          id="textFilter"
          value={filters.text}
          onChange={e => handleInputChange(e.target.value)}
        />
        <select
          name="sortFilter"
          id="sortFilter"
          onChange={e => handleSelect(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={filters.startDate}
          startDateId="startDate"
          endDate={filters.endDate}
          endDateId="endDate"
          onDatesChange={handleDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.handleFocusChange}
          showDefaultInputIcon={true}
          withFullScreenPortal={true}
          keepOpenOnDateSelect={true}
          showClearDates={true}
          hideKeyboardShortcutsPanel={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: value => {
      dispatch(setTextFilter(value));
    },
    handleSelect: value => {
      if (value === 'date') {
        dispatch(sortByDate(value));
      } else if (value === 'amount') {
        dispatch(sortByAmount(value));
      }
    },
    handleDatesChange: ({ startDate, endDate }) => {
      dispatch(setStartDate(startDate));
      dispatch(setEndDate(endDate));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
