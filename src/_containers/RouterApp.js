import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Logout from '../components/Logout';
import Login from '../components/Login';
import Home from '../components/Home';
import UserGarage from './UserGarage';
import Garage from './Garage';

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
            <Route path="/edit" render={ () => !this.props.loggedIn ? <Redirect to="/login"/> : <UserGarage/> }/>
            <Route path="/login" render={ () => this.props.loggedIn ? <Redirect to="/edit"/> : <Login/> }/>
            <Route path="/logout" component={ Logout }/>
            <Route path="/:username" component={ Garage }/>
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