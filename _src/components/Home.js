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
        <p>Welcome to the home page.</p>
      </div>
    );
  }
}

export default connect()(Home);