import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/actions';

export default class Home extends Component {
  
  render() {
    return <p>Welcome Home, nucka.</p>
  }
}
