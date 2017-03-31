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
      this.props.dispatch(updateLoginStatus(true, cookie.load('uid')));
    }
  }

  render() {
    return (
      <div>
        <TopBar isLoggedIn={this.props.isLoggedIn}/>
        <Router>
          <div>
            <Route exact path="/" render={() => <Home uid={this.props.uid} isLoggedIn={this.props.isLoggedIn}/>}/>
            <Route exact path="/:username" component={UserStore}/>
          </div>
        </Router>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    isLoggedIn : state.userState.isLoggedIn,
    uid : state.userState.uid
  }
}

export default connect(mapState)(App);
