import React, { Component } from 'react';

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

