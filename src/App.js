import React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Transactions from './components/Transactions';
import Budgets from './components/Budgets';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/budgets" component={Budgets} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
