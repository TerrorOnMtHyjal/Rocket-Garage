import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../../components/Item';
import Hero from './Hero';
import ShopInfo from './ShopInfo';
import Shop from './Shop';
import { getGarages, updateViewedPostType, updateDisplayedGID } from '../../actions/actions';

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
        <Hero></Hero>
        <ShopInfo></ShopInfo>
        <Shop items={currentGarage.items}></Shop>
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