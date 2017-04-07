import React, { Component } from 'react';
import { connect } from 'react-redux';
// import cookie from 'react-cookie';
// import jwtDecode from 'jwt-decode';

import Garage from './Garage';
import AddItemControls from '../components/AddItemControls';

class UserGarage extends Component {
  render() {
    return (
      <div>
        <Garage username={this.props.username}/>
        <AddItemControls />
      </div>
    );
  }
}

const mapState = (state) => ({
  username : state.appState.userDetails.username
});

export default connect(mapState)(UserGarage);