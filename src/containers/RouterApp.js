import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, IndexRoute } from 'react-router-dom';

import Logout from '../components/Logout';
import Login from '../components/Login';
import Home from '../components/Home';

let loggedIn;

const LogLink = () => {
    return loggedIn ? (
    <Link to="/logout">Logout</Link>
  ) : (
    <Link to="/login">Login</Link>
  )
};

const Links = () => (
  <div>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/edit">My Garage</Link>
      <LogLink/>
    </nav>
  </div>
);

const RouterApp = (props) => {
  loggedIn = props.loggedIn;
  return (
    <Router>
      <div>
        <Route path="/" component={Links} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/edit" render={ () => <h1>My Garage</h1> }/>
          <Route path="/login" render={ () => <Login loggedIn={loggedIn}/> }/>
          <Route path="/logout" component={ Logout }/>
          <Route path="/:username" render={ () => <h1>User Garage</h1> }/>
        </Switch>
      </div>
    </Router>
  );
};

export default RouterApp;