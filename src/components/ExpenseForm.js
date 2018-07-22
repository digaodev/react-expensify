import React, { Component } from 'react';

// https://github.com/airbnb/react-dates
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    const { expense } = props;

    this.state = {
      description: expense ? expense.description : '',
      note: expense ? expense.note : '',
      amount: expense ? (expense.amount / 100).toString() : '',
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  handleDescriptionChange = value => {
    this.setState(() => ({ description: value }));
  };

  handleNoteChange = value => {
    this.setState(() => ({ note: value }));
  };

  handleAmountChange = value => {
    if (/^\d*(\.\d{0,2})?$/.test(value)) {
      this.setState(() => ({ amount: value }));
    }
  };

  handleDateChange = date => {
    this.setState(() => ({ createdAt: date }));
  };

  handleDateFocusChange = focused => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const { description, amount, note, createdAt } = this.state;

    if (!description || !amount) {
      this.setState(() => ({
        error: 'Please provide a Description and an Amount.'
      }));
    } else {
      this.setState(() => ({ error: '' }));

      const newExpense = {
        description,
        amount: parseFloat(amount, 10) * 100,
        note,
        createdAt: createdAt.valueOf()
      };
      this.props.onSubmit(newExpense);
    }
  };

  render() {
    const {
      description,
      note,
      amount,
      createdAt,
      calendarFocused,
      error
    } = this.state;

    const { expense } = this.props;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {error && <p className="form__error">{error}</p>}
        <input
          type="text"
          placeholder="Description"
          className="text-input"
          autoFocus
          value={description}
          onChange={e => this.handleDescriptionChange(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          className="text-input"
          value={amount}
          onChange={e => this.handleAmountChange(e.target.value)}
        />

        <SingleDatePicker
          date={createdAt} // momentPropTypes.momentObj or null
          onDateChange={date => this.handleDateChange(date)} // PropTypes.func.isRequired
          focused={calendarFocused} // PropTypes.bool
          onFocusChange={({ focused }) => this.handleDateFocusChange(focused)} // PropTypes.func.isRequired
          id="formDatePicker" // PropTypes.string.isRequired,
          showDefaultInputIcon={true}
          withFullScreenPortal={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <textarea
          name="noteInput"
          id="noteInput"
          cols="30"
          rows="10"
          placeholder="Add a note for your expense (optional)"
          className="textarea"
          value={note}
          onChange={e => this.handleNoteChange(e.target.value)}
        />

        <button type="submit" className="button">
          {expense ? 'Update Expense' : 'Add Expense'}
        </button>
      </form>
    );
  }
}

export default ExpenseForm;
