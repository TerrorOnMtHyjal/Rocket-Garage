import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  componentWillMount(){
   // this.props.dispatch(getUserItems());
  }
  render() {
    return (
      <div>
        {this.props.isLoggedIn 
          ? <p>You're logged in!</p> 
          : <p>Home. Please log in to modify your garage.</p>}
      </div>
    );
  }
}

export default connect()(Home);