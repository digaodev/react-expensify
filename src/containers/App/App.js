import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import './App.css';

import Header from '../../components/Header';
import ExpenseDashboard from '../../components/ExpenseDashboard';
import AddExpense from '../../components/AddExpense';
import EditExpense from '../../components/EditExpense';
import LoginPage from '../../components/LoginPage';
import NotFound from '../../components/NotFound';

export const history = createHistory();
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/dashboard" component={ExpenseDashboard} />
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
