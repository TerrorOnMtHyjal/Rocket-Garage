import React, { Component } from 'react';
import { connect } from 'react-redux';
//import cookie from 'react-cookie';
//import jwtDecode from 'jwt-decode';

import { getGarages } from '../actions/actions';

class Garage extends Component {
  componentWillMount(){
    this.props.dispatch(getGarages(this.props.match.params.username))
  }

  render() {
    return (
      <div>
        <h1>Viewed Garage</h1>
      </div>
    );
  }
}

const mapState = (state) => ({

});

export default connect(mapState)(Garage);