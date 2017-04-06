import React, { Component } from 'react';
import { connect } from 'react-redux';
//import cookie from 'react-cookie';
//import jwtDecode from 'jwt-decode';

import { getGarages, updateViewedPostType } from '../actions/actions';

class Garage extends Component {
  componentWillMount(){
    this.props.dispatch(getGarages(this.props.match.params.username))
  }

  render() {
    const currentGarage = this.props.garages[this.props.displayedGID];

    return (
      <div>
        <h1>{currentGarage ? currentGarage.header : undefined}</h1>
        <h3>{currentGarage ? currentGarage.subheader : undefined}</h3>
        <p>Platform : {currentGarage ? currentGarage.platform : undefined}</p>
        <ul>
          {currentGarage ? (
            currentGarage.items.map(item => {
              if(item.postType === this.props.displayedPostType){
                return <li key={item.uiid} data-owner={currentGarage.owner_uid}>{item.name}</li>;
              }
            })
            ) : (
              undefined
            )}
        </ul>
        <button onClick={() => this.props.dispatch(updateViewedPostType("have"))}>Have</button>
        <button onClick={() => this.props.dispatch(updateViewedPostType("want"))}>Want</button>
      </div>
    );
  }
}

const mapState = (state) => ({
  displayedGID :  state.appState.displayedGID,
  displayedPostType : state.appState.displayedPostType,
  garages : state.garageState
});

export default connect(mapState)(Garage);