import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/actions';

class TopBar extends Component {
  render() {
    return (
      <div>
       <a href="/api/auth">Login With Steam</a>
       {/*<button onClick={() => this.props.dispatch(loginUser())}>Login With Steam</button>*/}
      </div>
    );
  }
}

export default connect()(TopBar);