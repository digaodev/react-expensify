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
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              name="textFilter"
              id="textFilter"
              placeholder="Search expenses..."
              value={filters.text}
              onChange={e => handleInputChange(e.target.value)}
            />
          </div>

          <div className="input-group__item">
            <select className="select"
              name="sortFilter"
              id="sortFilter"
              onChange={e => handleSelect(e.target.value)}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>

          <div className="input-group__item">
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
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
