import React, { Component } from 'react';
import { getStore } from '../actions/actions';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

class Store extends Component {

  componentWillMount() {
    this.props.dispatch(getStore(this.props.match.params.username));
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        {/*<h1>{this.props.store.header}</h1>
        <h3>{this.props.store.subheader}</h3>*/}
        <ItemList items={this.props.items}/>
      </div>
    );
  }
}

const mapState = (state) => {
  return { items: state.userState.storeItems };
};

export default connect(mapState)(Store);