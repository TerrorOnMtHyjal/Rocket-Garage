import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserStore from './UserStore';
import Home from '../components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:username" component={UserStore}/>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
