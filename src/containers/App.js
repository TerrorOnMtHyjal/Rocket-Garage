import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import cookie from 'react-cookie';

import { updateLoginStatus } from '../actions/actions';
import UserStore from './UserStore';
import Home from '../components/Home';
import TopBar from '../components/TopBar'

class App extends Component {

  componentWillMount(){
    if(cookie.load('accessToken') && this.props.isLoggedIn === false){
      this.props.dispatch(updateLoginStatus(true));
    }
  }

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

const mapState = (state) => {
  return {isLoggedIn : state.userState.isLoggedIn}
}

export default connect(mapState)(App);
