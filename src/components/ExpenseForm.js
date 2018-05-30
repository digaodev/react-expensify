import React, { Component } from 'react';

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  handleDescriptionChange = value => {
    this.state(() => ({ description: value }));
  };

  handleNoteChange = value => {
    this.state(() => ({ note: value }));
  };

  handleAmountChange = value => {
    if (/^\d*(\.\d{0,2})?$/.test(value)) {
      this.setState(() => ({ amount: value }));
    }
  };

  render() {
    const { description, note, amount } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={e => this.handleDescriptionChange(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => this.handleAmountChange(e.target.value)}
          />

          <textarea
            name="noteInput"
            id="noteInput"
            cols="30"
            rows="10"
            placeholder="Add a note for your expense (optional)"
            value={note}
            onChange={e => this.handleNoteChange(e.target.value)}
          />

          <button type="submit">Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
