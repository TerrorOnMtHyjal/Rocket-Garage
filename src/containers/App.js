import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import cookie from 'react-cookie';
import jwtDecode from 'jwt-decode';

import RouterApp from './RouterApp';

export default class App extends Component {
  render() {
    return (
      <RouterApp isLoggedIn={false}/>
    );
  }
}
