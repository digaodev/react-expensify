import React, { Component } from 'react';
import './App.css';

import ExpenseDashboard from '../../components/ExpenseDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpenseDashboard />
      </div>
    );
  }
}

export default App;
