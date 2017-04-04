import React, { Component } from 'react';
import { connect } from 'react-redux';
//import cookie from 'react-cookie';
// import jwtDecode from 'jwt-decode';

import RouterApp from './RouterApp';

class App extends Component {
  componentWillMount(){

  }

  render() {
    return (
      <RouterApp loggedIn={this.props.loggedIn}/>
    );
  }
}

const mapState = (state) => {
  return {
    loggedIn : state.appState.isLoggedIn
  }
};

export default connect(mapState)(App);