import React, { Component } from 'react';
import { connect } from 'react-redux';
import Garage from './Garage';

class UserGarage extends Component {

  componentWillMount() {
  }

  componentDidMount() {   
  }

  render() {
    return (
      <div>
        <Garage />  
      </div>
    );
  }
}

export default connect()(UserGarage);