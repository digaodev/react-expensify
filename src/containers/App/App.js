import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from '../../components/Header';
import ExpenseDashboard from '../../components/ExpenseDashboard';
import AddExpense from '../../components/AddExpense';
import EditExpense from '../../components/EditExpense';
import NotFound from '../../components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={ExpenseDashboard} />
              <Route path="/add" component={AddExpense} />
              <Route path="/edit/:id" component={EditExpense} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
