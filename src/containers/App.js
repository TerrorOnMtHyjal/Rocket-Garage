import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserStore from './UserStore';
import Home from '../components/Home';
import TopBar from '../components/TopBar'

const cookies = document.cookie;
console.log(cookies);

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/:username" component={UserStore}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
