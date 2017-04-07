import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../components/Item';
import { getGarages, updateViewedPostType, updateDisplayedGID } from '../actions/actions';

class Garage extends Component {
  componentWillMount(){
    if(this.props.match){
      this.props.dispatch(getGarages(this.props.match.params.username))
    } else {
      this.props.dispatch(getGarages(this.props.username))
    }
  }

  dataChanged(data){
    console.log(data);
  }

  render() {
    let currentGarage = this.props.garageDetails ? this.props.garageDetails.garages[this.props.gid] : undefined;

    return (
      currentGarage ? (
        <div>
          <h1>{currentGarage.header}</h1>
          <h3>{currentGarage.subheader}</h3>
          <p>Platform : {currentGarage.platform}</p>
          <button onClick={() => this.props.dispatch(updateViewedPostType("have"))}>Have</button>
          <button onClick={() => this.props.dispatch(updateViewedPostType("want"))}>Want</button>
          {currentGarage.items.map(item => item.postType === this.props.postType ? <Item key={item.uiid} item={item}/> : undefined)}
        </div>
      ) : (
        <div>
          <h1></h1>
        </div>
      )
    )
  }
}

const mapState = (state) => ({
  gid :  state.appState.displayed.gid,
  postType : state.appState.displayed.postType,
  garageDetails : state.garageState[state.appState.displayed.username]
});

export default connect(mapState)(Garage);