import React from 'react';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
