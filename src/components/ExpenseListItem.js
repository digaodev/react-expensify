import React from 'react';

import moment from 'moment';
import numeral from 'numeral';

import { Link } from 'react-router-dom';

const ExpenseListItem = ({
  id,
  description,
  amount,
  createdAt,
  handleRemove
}) => (
  <li>
    <Link to={`/edit/${id}`}>
      <div>
        <h3>Description: {description}</h3>
        <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
        <time>Created: {moment(createdAt).format('MMMM Do, YYYY')}</time>
      </div>
    </Link>
  </li>
);

export default ExpenseListItem;
