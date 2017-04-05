import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/actions';

class Login extends Component {
  componentWillMount(){

  }

  componentDidMount(){
    
    if(this.props.loggedIn){
      console.log("you're already logged in!");
      this.props.history.push("/");
    }
  }
  
  render() {
    return (
      <div>
        <a href="api/auth">Login With Steam</a><br />
        <a href="#">Login With Email</a>
      </div>
    );
  }
}

export default connect()(Login);