import React, { Component } from 'react';
import { getItems } from '../actions/actions';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

class Store extends Component {

  componentWillMount() {
    this.props.dispatch(getItems(this.props.match.params.username));
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <ItemList items={this.props.items}/>
      </div>
    );
  }
}

const mapState = (state) => {
  return { items: state.userState.storeItems };
};

export default connect(mapState)(Store);