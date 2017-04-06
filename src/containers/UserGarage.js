import React, { Component } from 'react';
import { connect } from 'react-redux';
// import cookie from 'react-cookie';
// import jwtDecode from 'jwt-decode';

import Garage from './Garage';

class UserGarage extends Component {
  render() {
    return (
      <div>
        <h1>User Garage</h1>
        <Garage username={this.props.username}/>
      </div>
    );
  }
}

const mapState = (state) => ({
  username : state.appState.userDetails.username
});

export default connect(mapState)(UserGarage);