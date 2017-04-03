import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserStore from '../containers/UserStore';

class Home extends Component {
  componentWillMount(){
   // this.props.dispatch(getUserItems());
  }
  
  render() {
    return (
      <div>
        {
          this.props.isLoggedIn 
          ? <UserStore /> 
          : <p>Home. Please log in to modify your garage.</p>
        }
      </div>
    );
  }
}

export default connect()(Home);