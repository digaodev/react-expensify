import React from 'react';

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
        <p>Description: {description}</p>
        <p>Amount: {amount}</p>
        <time>Created: {createdAt}</time>
      </div>
    </Link>
  </li>
);

export default ExpenseListItem;
