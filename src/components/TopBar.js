import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/actions';
import cookie from 'react-cookie';

class TopBar extends Component {
  purgeUser(){
    cookie.remove('accessToken');
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <div>
       {
        this.props.isLoggedIn 
        ? <div>
            <a href="/edit">My Garage</a>
            <button onClick={() => this.purgeUser()}>Logout</button>
          </div> 
        : <a href="/api/auth">Login With Steam</a>
        }
      </div>
    );
  }
}

export default connect()(TopBar);