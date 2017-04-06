import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/actions';

export default class Login extends Component { 
  render() {
    return (
      <div>
        <a href="api/auth">Login With Steam</a><br />
        <a href="#">Login With Email</a>
      </div>
    );
  }
}

