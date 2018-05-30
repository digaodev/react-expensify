import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <nav>
        <NavLink activeClassName="is-active" exact to="/">
          Dashboard
        </NavLink>
        <NavLink activeClassName="is-active" exact to="/add">
          Add Expense
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
