import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Logout from '../components/Logout';
import Login from '../components/Login';
import Home from '../components/Home';

const LogLink = (props) => {
    return props.loggedIn ? (
    <Link to="/logout">Logout</Link>
  ) : (
    <Link to="/login">Login</Link>
  )
};

const Links = (props) => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/edit">My Garage</Link>
      <LogLink loggedIn={props.loggedIn}/>
    </nav>
  </div>
);

export class RouterApp extends Component {
  render(){
    return (
      <Router>
        <div>
          <Links loggedIn={this.props.loggedIn}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/edit" render={ () => <h1>My Garage</h1> }/>
            <Route path="/login" render={ () => this.props.loggedIn ? <Redirect to="/edit"/> : <Login/> }/>
            <Route path="/logout" component={ Logout }/>
            <Route path="/:username" render={ () => <h1>User Garage</h1> }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = (state) => ({
  loggedIn : state.appState.isLoggedIn
});

export default connect(mapState)(RouterApp);