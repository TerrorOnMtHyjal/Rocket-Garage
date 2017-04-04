import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/actions';

class Login extends Component {
  componentWillMount(){
    this.props.dispatch(loginUser());
  }

  componentDidMount(){
    this.props.history.push("/");
  }
  
  render() {
    return null;
  }
}

export default connect()(Login);