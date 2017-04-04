import React, { Component } from 'react';
import { connect } from 'react-redux';
import Garage from './Garage';

export default class UserGarage extends Component {

  componentWillMount() {
  }

  componentDidMount() {   
  }

  render() {
    return (
      <div>
        <p>User Garage</p>
        <Garage /> 
      </div>
    );
  }
}