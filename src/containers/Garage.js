import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../components/Item';
import { getGarages, updateViewedPostType, updateDisplayedGID } from '../actions/actions';

class Garage extends Component {
  componentWillMount(){
    this.props.dispatch(getGarages(this.props.match.params.username))
  }

  render() {
    if(!this.props.garageDetails){
      return <h1>Loading...</h1>
    }

    let currentGarage = this.props.garageDetails.garages[this.props.gid];

    return (
      <div>
        <h1>{currentGarage.header}</h1>
        <h3>{currentGarage.subheader}</h3>
        <p>Platform : {currentGarage.platform}</p>
        <button onClick={() => this.props.dispatch(updateViewedPostType("have"))}>Have</button>
        <button onClick={() => this.props.dispatch(updateViewedPostType("want"))}>Want</button>
        {currentGarage.items.map(item => item.postType === this.props.postType ? <Item key={item.uiid} item={item}/> : undefined)}
      </div>
    )
  }
}

const mapState = (state) => ({
  gid :  state.appState.displayed.gid,
  postType : state.appState.displayed.postType,
  garageDetails : state.garageState[state.appState.displayed.username]
});

export default connect(mapState)(Garage);