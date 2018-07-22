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
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__subtitle">
          <time>Created on {moment(createdAt).format('MMMM Do, YYYY')}</time>
        </span>
      </div>
      <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
  </li>
);

export default ExpenseListItem;
