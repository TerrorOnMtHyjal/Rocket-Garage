import React, { Component } from 'react';
import { connect } from 'react-redux';
// import jwtDecode from 'jwt-decode';

import RouterApp from './RouterApp';

class App extends Component {
  componentWillMount(){
    //loggedIn = cookie.load('accessToken');
  }

  render() {
    return (
      <RouterApp />
    );
  }
}

export default connect()(App);