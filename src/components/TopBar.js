import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginStatus } from '../actions/actions';
import cookie from 'react-cookie';


//import { loginUser } from '../actions/actions';

class TopBar extends Component {
  logOutUser(){
    cookie.remove('accessToken');
    this.props.dispatch(updateLoginStatus(false));
  }
  render() {
    return (
      <div>
       {this.props.isLoggedIn ? <button onClick={() => this.logOutUser()}>Logout</button> : <a href="/api/auth">Login With Steam</a>}
       {/*<button onClick={() => this.props.dispatch(loginUser())}>Login With Steam</button>*/}
      </div>
    );
  }
}

export default connect()(TopBar);