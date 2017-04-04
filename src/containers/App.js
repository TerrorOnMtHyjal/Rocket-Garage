import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

import RouterApp from './RouterApp';

const loggedIn = false;

export default class App extends Component {
  componentWillMount(){
    cookie.load('accessToken')
    ? loggedIn = true
    : loggedIn = false
  }
  render() {
    return (
      <RouterApp loggedIn={loggedIn}/>
    );
  }
}
