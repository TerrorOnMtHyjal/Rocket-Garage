import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from '../components/Item';
import { getGarages, updateViewedPostType, updateDisplayedGID } from '../actions/actions';

class Garage extends Component {
  constructor(){
    super();
    this.state = {
      editing : {
        header : false,
        subheader : false,
        platform : false
      }
    }
  }
  componentWillMount(){
    this.props.dispatch(getGarages(this.props.username));
  }

  updateEditable(element){
    const updatedEditing = { ...this.state.editing };
    updatedEditing[element] = !updatedEditing[element];
    this.setState({ editing : updatedEditing});
  }

  renderEditables(currentGarage){
    let editables = [];

    if(this.state.editing.header){
      editables.push(<p onClick={() => this.updateEditable("header")}>editing header</p>);
    }else{
      editables.push(<h1 onClick={() => this.updateEditable("header")}>{currentGarage.header}</h1>); 
    }

    if(this.state.editing.subheader){
      editables.push(<p onClick={() => this.updateEditable("subheader")}>editing subheader</p>);
    }else{
      editables.push(<h3 onClick={() => this.updateEditable("subheader")}>{currentGarage.subheader}</h3>);
    }

    if(this.state.editing.platform){
      editables.push(<p onClick={() => this.updateEditable("platform")}>editing platform</p>);
    }else{
      editables.push(<p onClick={() => this.updateEditable("platform")}>Platform : {currentGarage.platform}</p>);
    }

    return editables;
  }
  
  render() {
    let currentGarage = this.props.garageDetails ? this.props.garageDetails.garages[this.props.gid] : undefined;

    return (
      currentGarage ? (
        <div>
          {this.renderEditables(currentGarage)}
          <button onClick={() => this.props.dispatch(updateViewedPostType("have"))}>Have</button>
          <button onClick={() => this.props.dispatch(updateViewedPostType("want"))}>Want</button>
          {currentGarage.items.map(item => item.postType === this.props.postType ? <Item editable={true} key={item.uiid} item={item}/> : undefined)}
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
  username : state.appState.userDetails.username,
  gid :  state.appState.displayed.gid,
  postType : state.appState.displayed.postType,
  garageDetails : state.garageState[state.appState.displayed.username]
});

export default connect(mapState)(Garage);