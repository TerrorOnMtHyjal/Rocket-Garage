import React, { Component } from 'react';
import { connect } from 'react-redux';
//import cookie from 'react-cookie';
//import jwtDecode from 'jwt-decode';

import { getGarages, updateViewedPostType, updateDisplayedGID } from '../actions/actions';

class Garage extends Component {
  componentWillMount(){
    if(this.props.match){
      this.props.dispatch(getGarages(this.props.match.params.username))
    } else {
      this.props.dispatch(getGarages(this.props.username))
    }
  }

  render() {
    const currentGarage = this.props.garages[this.props.displayedGID];
    const garagesArray = [];

    for(let garage in this.props.garages){
      garagesArray.push(this.props.garages[garage]);
    }

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
        <br />
        {currentGarage ? (
          garagesArray.map(garage => {
            return <button key={garage.gid} onClick={() => this.props.dispatch(updateDisplayedGID(garage.gid))}>Garage #{garage.gid}</button>
          })
        ) : (
          undefined
        )}
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